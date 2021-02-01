Rails.application.routes.draw do
  resources :calculators
  
  get 'calculators/decking'
  devise_for :users
  get 'forms/show'
  get 'forms/new'
  get 'forms/create'
  get 'designs/index'
  get 'patios/index'
  get 'patios/sandstone'
  get 'patios/limestone'
  get 'patios/granite'
  get 'deckings/index'
  get 'deckings/budget'
  get 'deckings/softwood'
  get 'deckings/hardwood'
  get 'pages/about'
  get 'pages/calculator'
  root to: 'pages#home'
  resources :forms, only: [:show, :new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
