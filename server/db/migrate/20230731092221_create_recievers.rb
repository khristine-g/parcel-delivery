class CreateRecievers < ActiveRecord::Migration[7.0]
  def change
    create_table :recievers do |t|
      t.string :username
      t.string :email
      t.integer :phone_number
      t.string :address

      t.timestamps
    end
  end
end
