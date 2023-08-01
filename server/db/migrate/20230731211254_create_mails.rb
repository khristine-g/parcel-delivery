class CreateMails < ActiveRecord::Migration[7.0]
  def change
    create_table :mails do |t|
      t.integer :user_id
      t.integer :receiver_id
      t.string :content

      t.timestamps
    end
  end
end
