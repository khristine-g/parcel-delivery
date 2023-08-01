class AddColumnsToParcel < ActiveRecord::Migration[7.0]
  def change
    add_column :parcels, :Type_of_shipment, :string
    add_column :parcels, :Carrier, :string
    add_column :parcels, :journey_duration, :string
    add_column :parcels, :Package, :integer
    add_column :parcels, :travel_distance, :integer
    add_column :parcels, :Pick_up_date, :datetime
    add_column :parcels, :Departure_date, :datetime
  end
end
