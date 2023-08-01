Rails.application.routes.draw do
  resources :parcels
  resources :recievers, only: [:create]
  post "/signup", to: "user#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # get "/auth", to: "user#show"
end
