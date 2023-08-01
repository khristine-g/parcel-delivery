class ApplicationController < ActionController::Base
  include ActionController::Cookies
  include AuthenticationModule


  before_action :authenticate_user
  protect_from_forgery with: :null_session

  private


  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  # Add a method to check if the user is an admin based on your application's logic.
  def current_user_is_an_admin?
    current_user&.admin_tag
  end
end
