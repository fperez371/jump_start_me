class Api::searchController < ApplicationController

  def show
    searchParam = params[:id]
    @projects = Project.where("name ILIKE ?", "#{searchParam}")
    render 'api/searches/show'
  end

end