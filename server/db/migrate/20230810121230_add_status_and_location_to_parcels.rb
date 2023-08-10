class AddStatusAndLocationToParcels < ActiveRecord::Migration[7.0]
  def change
    add_column :parcels, :status, :string, default: 'Pending'
    add_column :parcels, :location, :string
  end
end
