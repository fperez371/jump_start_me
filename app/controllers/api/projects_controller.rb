class ProjectsController < ApplicationController
  def create
    @project = current_user.projects.new(project_params)
    @project.creator_id = current_user.id

    if @project.save
      render json: @project
    else
      render json: @project, status: unprocessable_entity
    end
  end

  def destroy 

  end



  def project_params
    params.require(:project).permit(:body, :name, :category, :proj_image_url, :goal_amt, :deadline)
  end
end