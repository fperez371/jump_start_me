class RemoveUniqueConstraintFromProjectIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :projects, :creator_id
    add_index :projects, :creator_id
  end
end
