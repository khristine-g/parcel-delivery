class RemovePhoneNumberFromParcels < ActiveRecord::Migration[7.0]
  def change
    remove_column :parcels, :phone_number, :string
  end
end
