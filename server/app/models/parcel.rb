class Parcel < ApplicationRecord
    before_create :generate_tracking_number

    belongs_to :user
    has_one :receiver


    attribute :location, :string

    validates :sender_phone_number, presence: true, format: { with: /\A\+\d+\z/, message: "should be in the format +254123456789" }
    validates :receiver_phone_number, presence: true, format: { with: /\A\+\d+\z/, message: "should be in the format +254123456789" }





    private

  def generate_tracking_number
    self.tracking_number = SecureRandom.hex(6).upcase
  end
   
end
