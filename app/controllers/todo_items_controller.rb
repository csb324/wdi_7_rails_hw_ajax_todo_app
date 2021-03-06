class TodoItemsController < ApplicationController

  respond_to :json

  def default_serializer_options
    {root: false}
  end

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

  def update
    @todo_item = TodoItem.find(params[:id])
    @todo_item.finished = true

    if @todo_item.save
      respond_with(@todo_item)
    else
      respond_with(@todo_item.errors)
    end
  end

  def destroy
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy

    @todo_items = TodoItem.all

    respond_with(@todo_items)
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:description)
  end

end
