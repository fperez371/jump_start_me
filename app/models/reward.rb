# == Schema Information
#
# Table name: rewards
#
#  id           :bigint(8)        not null, primary key
#  proj_id      :integer          not null
#  amount       :integer          not null
#  description  :text             not null
#  name         :string           not null
#  est_delivery :date             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Reward < ApplicationRecord

validates :amount, :description, :name, :est_delivery, presence: true

belongs_to :project,
  class_name: :Project,
  foreign_key: :proj_id,
  primary_key: :id

end
