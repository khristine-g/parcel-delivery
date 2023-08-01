class AddAdminTagtoUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :admin_tag, :boolean
  end
end
