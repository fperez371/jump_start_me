class Reward < ApplicationRecord

validates :amount, :description, :name, :est_delivery, presence: true

belongs_to :project
  class_name: :project,
  foreign_key: :proj_id
  primary_key: :id
  
end