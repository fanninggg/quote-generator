Rails.application.routes.draw do
  root 'contracts#new'
  resources :contracts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
