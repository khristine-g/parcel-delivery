# app/controllers/api/users_controller.rb

class Api::UsersController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authenticate_request, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found

  def show
    user = User.find(session[:user_id])
    render json: user, status: :ok
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: { message: "User created successfully" }, status: :created
    else
      render json: { error: user.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  # ... other actions ...

  private

  def render_unprocessable_entity(invalid)
    render json: { error: invalid.record.errors }, status: :unprocessable_entity
  end

  def render_user_not_found
    render json: { error: "User not found" }, status: :not_found
  end

  def user_params
    params.permit(:name, :email, :password, :password_confirmation, :phone_number)
  end
end
