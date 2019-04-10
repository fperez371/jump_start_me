json.partial! "api/users/user", user: @user

if (@projects)
  json.set! 'projects' do
    @projects.each do |project|
      json.set! project.id do
        json.partial! '/api/projects/project', project: project
      end
    end
  end
end