class Project < ApplicationRecord
  validates :body, :name, :category, :proj_image_url, :goal_amt, :deadline, presence: true
  belongs_to :user



end 