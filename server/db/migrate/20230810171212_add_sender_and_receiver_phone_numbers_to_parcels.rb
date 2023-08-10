class AddSenderAndReceiverPhoneNumbersToParcels < ActiveRecord::Migration[7.0]
  def change
    add_column :parcels, :sender_phone_number, :string
    add_column :parcels, :receiver_phone_number, :string
  end
end
