class AddReceiverIdToParcel < ActiveRecord::Migration[7.0]
  def change
    add_column :parcels, :receiver_id, :integer
  end
end
