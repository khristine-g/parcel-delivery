class Parcel < ApplicationRecord
    before_create :generate_tracking_number

    belongs_to :user
    has_one :receiver




    private

  def generate_tracking_number
    self.tracking_number = SecureRandom.hex(6).upcase
  end
   
end
