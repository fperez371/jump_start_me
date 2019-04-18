@projects.each do |project| 
  json.set! results do 
    json.partial! "api/projects/project", project: project
  end 
end