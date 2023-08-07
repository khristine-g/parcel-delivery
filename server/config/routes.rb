Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :parcels, only: [:create, :update, :index, :show] do
    member do
      put 'update_destination'
    end
    collection do
      get 'admin_dashboard' # Add the admin dashboard action to the collection
    end
  end

  resources :receivers, only: [:create]

  namespace :api do
    post '/signup', to: 'users#create'
    post '/login', to: 'auth#login'
  end
  put '/parcels/admin_dashboard/:id', to: 'parcels#update_admin_dashboard'
end

