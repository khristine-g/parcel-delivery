# lib/json_web_token.rb

require 'jwt'

module JsonWebToken
  SECRET_KEY = Rails.application.secrets.secret_key_base

  def self.encode(payload, exp = 1.hour.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new(decoded)
  end
end





# module JsonWebToken
#   def self.encode(payload)
#     JWT.encode(payload, Rails.application.secrets.secret_key_base)
#   end

#   def self.decode(token)
#     decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base)
#     decoded_token.first
#   rescue JWT::DecodeError => e
#     raise ExceptionHandler::InvalidToken, e.message
#   end
# end
