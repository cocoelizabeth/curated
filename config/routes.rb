Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :edit, :destroy] do 
      resources :ideas, only: [:index]
      resources :collections, only:[:index]
    end
    resource :session, only: [:create, :destroy]
    resources :ideas,  only: [:index, :create, :show, :update, :destroy]
    resources :collections, only: [:create, :destroy, :show, :update] do
      resources :ideas, only: [:index]
      resources :idea_joins, only: [:index, :create, :show, :update, :destroy]
    end
  end
  root to: 'static_pages#root'
end

# TO DO:


