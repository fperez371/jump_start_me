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
    @project = current_user.projects.new(project_params)
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
    params.require(:project).permit(:body, :name, :category, :location, :goal_amt, :deadline, :photo)
  end
end