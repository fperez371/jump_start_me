Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :show, :destroy]
    resources :projects do
      resources :rewards, only: [:create, :update, :destroy] 
    end
  end
end
