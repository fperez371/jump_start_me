# == Schema Information
#
# Table name: projects
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  name       :string           not null
#  category   :string           not null
#  creator_id :integer          not null
#  goal_amt   :integer          not null
#  deadline   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  location   :string           not null
#

class Project < ApplicationRecord

  validate :ensure_photo
  validates :body, :name, :category, :location, :goal_amt, :deadline, presence: true
  validates :category, inclusion: { in: %w(Arts Comics&Illustration Design&Tech Film Food&Craft Games Music Publishing) }
  
  belongs_to :creator,
  class_name: :User,
  foreign_key: :creator_id,
  primary_key: :id
  
  has_many :rewards,
  class_name: :Reward,
  foreign_key: :proj_id,
  primary_key: :id
  
  has_many :pledges,
  class_name: :Pledge,
  foreign_key: :proj_id,
  primary_key: :id
  
  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must attach a photo"
    end
  end

end 
