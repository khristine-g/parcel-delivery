class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.string :sender_name
      t.string :sender_email
      t.string :sender_address
      t.string :receiver_name
      t.string :receiver_email
      t.string :receiver_address
      t.string :receiver_country
      t.string :weight
      t.string :type_of_shipment
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
