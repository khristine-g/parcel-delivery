class AddPhoneNumberToParcels < ActiveRecord::Migration[7.0]
  def change
    add_column :parcels, :phone_number, :string
  end
end
