# == Schema Information
#
# Table name: projects
#
#  id             :bigint(8)        not null, primary key
#  body           :text             not null
#  name           :string           not null
#  category       :string           not null
#  proj_image_url :string           not null
#  creator_id     :integer          not null
#  goal_amt       :integer          not null
#  deadline       :datetime         not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Project < ApplicationRecord


  validates :body, :name, :category, :location, :goal_amt, :deadline, presence: true
  validates :category, inclusion: { in: %w(Arts Comics&Illustration Design&Tech Film Food&Craft Games Music Publishing) }
  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id

  has_one_attached :photo

end 
