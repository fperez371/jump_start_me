class Api::SearchController < ApplicationController

  def show
    searchParam = params[:id]
    @projects = Project.where("name ILIKE ?", "%#{searchParam}%")
    render 'api/search/show'
  end

end