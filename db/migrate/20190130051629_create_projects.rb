class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.text :body, null: false
      t.string :name, null: false
      t.string :category, null: false
      t.string :proj_image_url, null: false
      t.integer :creator_id, null: false
      t.integer :goal_amt, null: false
      t.datetime :deadline, null: false
      t.timestamps
    end
    add_index :projects, :creator_id, unique: true
  end
end
