class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      @project = @pledge.project
      render 'api/projects/show'
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end



  def pledge_params
    params.require(:pledge).permit(:amount, :proj_id, :backer_id, :reward_id)
  end
end