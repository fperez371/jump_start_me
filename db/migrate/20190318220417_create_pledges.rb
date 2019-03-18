class CreatePledges < ActiveRecord::Migration[5.2]
  def change
    create_table :pledges do |t|
      t.integer :amount, null: false
      t.integer :proj_id, null: false
      t.integer :backer_id, null: false

      t.timestamps
    end
    add_index :pledges, :proj_id
  end
end
