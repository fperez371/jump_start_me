json.extract! project, :id, :body, :name, :category, :location, :goal_amt, :deadline, :created_at, :creator_id, :photo


if project.photo.attached?
  json.photo url_for(project.photo)
end

def total_pledges(project)
  project.pledges.length
end

def total_raised(project)
  project.pledges.inject(0) {|total, pledge| total += pledge.amount}
end

def percent_to_goal(project)
  if project.goal_amt
    ((total_raised(project) / project.goal_amt.to_f) * 100).round
  else
    0
  end
end

json.percentToGoal percent_to_goal(project)
json.totalRaised total_raised(project)
json.totalPledges total_pledges(project)

json.creator do
  json.id project.creator.id
  json.email project.creator.email
  json.name project.creator.name
end

