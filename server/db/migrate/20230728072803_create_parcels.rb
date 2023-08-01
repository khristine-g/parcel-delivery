class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.integer :weight
      t.string :password_digest
      t.string :present_location
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end
