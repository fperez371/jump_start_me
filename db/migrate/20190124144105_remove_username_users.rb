class RemoveUsernameUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username, :string
    add_index :users, :email
  end
end
