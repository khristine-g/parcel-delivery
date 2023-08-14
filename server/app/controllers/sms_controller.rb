# app/controllers/sms_controller.rb
class SmsController < ApplicationController
    skip_before_action :authenticate_request, only: [:send_sms]
    def send_sms
      to = "+254746638292,+254740048854"
      message = "Dear customer,your parcel arrives in 2 days."

  
      SMSSender.send_sms(to, message)
  
      render plain: "Parcel status SMS sent successfully!"
    end
  end
  