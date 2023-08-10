class AddTrackingNumberToParcels < ActiveRecord::Migration[7.0]
  def change
    add_column :parcels, :tracking_number, :string
    add_index :parcels, :tracking_number, unique: true
  end
end
