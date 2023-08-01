class User < ApplicationRecord
    has_many :parcels
    
    has_secure_password
    validates :username, uniqueness: true
    validates :username, presence: true

    attr_accessor :admin_tag

end
