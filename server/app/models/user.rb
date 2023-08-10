class User < ApplicationRecord

  has_many :parcels
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true
  validates :phone_number, presence: true, format: { with: /\A\+\d+\z/, message: "should be in the format +254123456789" }



 

  def admin?
    is_admin
  end
 
end
