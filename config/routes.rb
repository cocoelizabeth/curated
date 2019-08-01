Rails.application.routes.draw do

  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :edit, :destroy] do 
      resources :ideas, only: [:show]
    end
    resource :session, only: [:create, :destroy]
    resources :ideas
  end
  
  root to: 'static_pages#root'
end

# TO DO:
# - boards resources
# - nest ideas to boards
# - nest boards under users
