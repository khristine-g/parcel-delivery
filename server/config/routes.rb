Rails.application.routes.draw do
  resources :parcels, only: [:index]
end
