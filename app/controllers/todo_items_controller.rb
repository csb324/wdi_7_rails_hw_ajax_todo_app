class TodoItemsController < ApplicationController

  respond_to :json

  def index
    @todo_items = TodoItem.all
    respond_with(@todo_items)
  end

  def create

    @todo_item = TodoItem.new(todo_item_params)

    if @todo_item.save
      respond_with(@todo_item)
    else
      respond_with(@todo_item.errors)
    end

  end

  def delete
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy
  end

end
