class Api::UsersController < ApplicationController
  def create 
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @projects = @user.projects
      
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    unless logged_in? && current_user.id == @user.id
      render json: [], status: 422
      return
    end

    if @user.update(user_params)
      @projects = @user.projects

      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end