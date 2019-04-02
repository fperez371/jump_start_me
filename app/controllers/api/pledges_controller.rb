class Api::PledgesController < ApplicationController
  def index 
    @pledges = Pledge.all 
    render :index
  end

  def show
    @pledge =  Pledge.find(params[:id])
    render :show
  end


  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.backer_id = current_user.id
    if @pledge.save
      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def update
    @pledge = Pledge.find(params[:id])
    if @pledge.update(project_params)
      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end

  end

  def destroy 
    @pledge = Pledge.find(params[:id])
    @pledge.destroy
    render :show
  end



  def pledge_params
    params.require(:pledge).permit(:amount, :proj_id, :backer_id)
  end
end