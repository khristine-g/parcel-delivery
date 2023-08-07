class Parcel < ApplicationRecord

    belongs_to :user
    has_one :receiver
   
end
