class User < ApplicationRecord

  has_many :parcels
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true



 

  def admin?
    is_admin
  end
 
end
