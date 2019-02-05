class Api::ProjectsController < ApplicationController

  def index 
    @projects = Project.all 
    render :index
  end

  def show
    @project =  Project.find(params[:id])
    render :show
  end


  def create
    @project = Project.new(project_params)
    debugger
    @project.creator_id = current_user.id
    @project.deadline = DateTime.now
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end

  end

  def destroy 
    @project = Project.find(params[:id])
    @project.destroy
    render :show
  end



  def project_params
    params.require(:project).permit(:body, :name, :category, :proj_image_url, :goal_amt, :deadline)
  end
end