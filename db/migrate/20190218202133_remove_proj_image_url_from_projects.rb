class RemoveProjImageUrlFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :proj_image_url
  end
end
