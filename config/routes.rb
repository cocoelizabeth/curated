Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :edit, :destroy] do 
      resources :ideas, only: [:show, :index]
      resources :collections, only:[:index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :ideas,  only: [:index, :create, :show, :edit, :destroy]
    resources :collections, only: [:create, :edit, :destroy] do
      resources :ideas, only: [:index]
    end
  end
  root to: 'static_pages#root'
end

# TO DO:


