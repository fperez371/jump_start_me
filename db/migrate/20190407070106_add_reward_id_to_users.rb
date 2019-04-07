class AddRewardIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :pledges, :reward_id, :integer
  end
end
