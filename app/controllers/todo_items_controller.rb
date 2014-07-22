class TodoItemsController < ApplicationController

  def index

    @todo_items = TodoItem.all
    # somehow show them

  end

  def create

    @todo_item = TodoItem.new(todo_item_params)

    if @todo_item.save
      # update the thing
    else
      # show errors
    end

  end

  def delete
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy
  end

end
