class AddLocationToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :location, :string, null: false
  end
end
