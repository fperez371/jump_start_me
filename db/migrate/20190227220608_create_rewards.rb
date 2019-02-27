class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :proj_id, null: false
      t.integer :amount, null: false
      t.text :description, null: false
      t.string :name, null: false
      t.date :est_delivery, null: false
      t.timestamps
    end
  end
end
