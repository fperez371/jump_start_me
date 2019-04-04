json.extract! project, :id, :body, :name, :category, :location, :goal_amt, :deadline, :created_at, :creator_id
if project.photo.attached?
  json.photo url_for(project.photo)
end

def total_backers(project)
  project.backings.length
end

def total_raised(project)
  project.backings.inject(0) {|total, backing| total += backing.value}
end

def percentage_complete(project)
  if project.goal_amt
    ((total_raised(project) / project.goal_amt.to_f) * 100).round
  else
    0
  end
end

json.creator do
  json.id project.creator.id
  json.email project.creator.email
  json.name project.creator.name
end

