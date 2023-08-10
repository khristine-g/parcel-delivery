# app/controllers/sms_controller.rb
class SmsController < ApplicationController
    def send_sms
      to = "+254717612388,+254740048854"
      message = "Hi Hamza,your parcel arrives in 2 days."

  
      SMSSender.send_sms(to, message)
  
      render plain: "Consent SMS sent successfully!"
    end
  end
  