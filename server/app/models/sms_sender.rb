# app/models/sm_s_sender.rb
require 'AfricasTalking'

class SMSSender
  def self.send_sms(to, message)
    # Set your app credentials
    username = "cravings_254"
    apikey   = "ab2f228fd447a7404df810fb16868e8904593c604837301c6af44956f426c720"

    # Initialize the SDK
    @AT=AfricasTalking::Initialize.new(username,apikey)
    # Get the SMS service
    sms = @AT.sms

    options = {
      "to" => to,
      "message" => message
  }
      

    begin
      # Thats it, hit send and we'll take care of the rest.
      reports = sms.send(options)
      reports.each { |report| puts report.to_yaml }
    rescue AfricasTalking::AfricasTalkingException => ex
      puts 'Encountered an error: ' + ex.message
    end
  end
end
