Rails.application.routes.draw do
  

  # Users routes
  resources :users, only: [:show, :create]

  # Parcels routes
  resources :parcels, only: [:create, :update, :index, :show, :destroy]do
 
    member do
      put 'update_destination'
      put 'update_status_and_location'
      delete 'cancel', to: 'parcels#cancel'
    end
    collection do
      get 'admin_dashboard' # Add the admin dashboard action to the collection
    end
  end

  # Receivers routes
  resources :receivers, only: [:create]

  # API namespace for user signup and login
  namespace :api do
    post '/signup', to: 'users#create'
    post '/login', to: 'auth#login'
  end

  # Additional routes for the admin dashboard and parcel status update
  resources :parcels, only: [] do
    collection do
      get 'admin_dashboard', to: 'parcels#admin_dashboard'
      put 'admin_dashboard/:id', to: 'parcels#update_admin_dashboard'
    end
  end


  get '/parcels/:tracking_number', to: 'parcels#track'



  get '/send_sms', to: 'sms#send_sms'

  # ... Other routes ...

end
