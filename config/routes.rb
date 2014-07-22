Rails.application.routes.draw do

  resources :todo_items, except: [:new, :edit]

  root 'home#index'

end
