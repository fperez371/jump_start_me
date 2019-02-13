json.extract! project, :id, :body, :name, :category, :proj_image_url, :goal_amt, :deadline, :created_at, :creator_id
if project.photo.attached?
  json.photo url_for(project.photo)
end