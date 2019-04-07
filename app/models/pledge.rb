# == Schema Information
#
# Table name: pledges
#
#  id         :bigint(8)        not null, primary key
#  amount     :integer          not null
#  proj_id    :integer          not null
#  backer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  reward_id  :integer
#

class Pledge < ApplicationRecord
  validates :amount, :proj_id, :backer_id, :reward_id, presence: true

  belongs_to :backer,
    class_name: :User,
    foreign_key: :backer_id,
    primary_key: :id 

  belongs_to :project,
    class_name: :Project,
    foreign_key: :proj_id,
    primary_key: :id
end
