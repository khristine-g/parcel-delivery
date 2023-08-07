class ApplicationController < ActionController::API
  include ExceptionHandler
  before_action :authenticate_request

  attr_reader :current_user

  private

  def authenticate_request
    header = request.headers["Authorization"]
    token = header&.split(" ")&.last

    puts "Received JWT Token: #{token}"

    begin
      decoded = JsonWebToken.decode(token)
      puts "Decoded Token: #{decoded}" # Add this line to check the decoded token
      @current_user = User.find(decoded[:user_id])
    rescue ActiveRecord::RecordNotFound, JWT::DecodeError => e
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def authenticate_user!
    # Check if the current_user is set (authenticated) or not
    render json: { error: "Unauthorized" }, status: :unauthorized unless current_user
  end

  def authorize_admin
    # Check if the current user is an admin and handle unauthorized access.
    # You can implement your admin authorization logic here.
    # For example:
    unless current_user.admin?
      if params[:action] == 'index'
        return # Skip authorization for regular users on the 'index' action.
      else
        render json: { error: "Unauthorized. Only admin can access the dashboard." }, status: :unauthorized
      end
    end
  end
end
