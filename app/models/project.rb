class Project < ApplicationRecord


  validates :body, :name, :category, :proj_image_url, :goal_amt, :deadline, presence: true
  validates :category, inclusion: { in: %w(Arts Comics&Illustration Design&Tech Film Food&Craft Games Music Publishing) }
  belongs_to :creator,
    class_name: :User



end 