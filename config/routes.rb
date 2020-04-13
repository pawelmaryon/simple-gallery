Rails.application.routes.draw do
  get 'designs/index'
  get 'patios/sandstone'
  get 'patios/limestone'
  get 'patios/granite'
  get 'deckings/budget'
  get 'deckings/softwood'
  get 'deckings/hardwood'
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
