class AddIsAdminToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_admin, :boolean unless column_exists?(:users, :is_admin)
  end
end
