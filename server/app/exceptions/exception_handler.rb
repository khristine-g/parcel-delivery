# app/exceptions/exception_handler.rb
module ExceptionHandler
    extend ActiveSupport::Concern
  
    class InvalidToken < StandardError; end
  
    included do
      rescue_from ExceptionHandler::InvalidToken, with: :invalid_token
      # Other custom exception handlers can be defined here
    end
  
    private
  
    def invalid_token(error)
      render json: { error: error.message }, status: :unauthorized
    end
  
    # Other custom exception handlers can be defined here
  end
  