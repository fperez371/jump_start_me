  json.partial! "api/projects/project", project: @project

  rewards = @project.rewards
  if(@project.rewards)
    json.set! 'rewards' do
      rewards.each do |reward|
        json.set! reward.id do
          json.partial! '/api/rewards/reward.json.jbuilder', reward: reward
        end
      end
    end
  end