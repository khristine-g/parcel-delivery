class User < ApplicationRecord
  enum role: [:user, :admin]
  has_many :parcels
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true

 

  # Method to determine if the user is an admin
  def admin?
    role == 'admin'
  end
end
