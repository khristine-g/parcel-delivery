class Parcel < ApplicationRecord
    belongs_to :user
    has_one :reciever
    has_secure_password
end
