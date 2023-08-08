# app/controllers/api/auth_controller.rb

module Api
  class AuthController < ApplicationController
    skip_before_action :authenticate_request, only: [:login]

    def login
      user = User.find_by(email: params[:email])

      if user&.authenticate(params[:password])
        token = JsonWebToken.encode(user_id: user.id)
        render json: { token: token }, status: :ok
       
      else
        render json: { error: "Invalid credentials" }, status: :unauthorized
      end
    end

    # def create
    #   user = User.find_by(email: params[:email])

    #   if user&.authenticate(params[:password])
    #     token = encode_token(user_id: user.id)
    #     render json: { token: token }
    #   else
    #     render json: { error: 'Invalid email or password' }, status: :unauthorized
    #   end
    # end

    private

    def encode_token(payload)
      payload[:exp] = Time.now.to_i + 3600 # Token expires in 1 hour
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
  end
end
