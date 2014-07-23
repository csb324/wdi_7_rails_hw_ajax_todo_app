class AddFinishedBooleanToTodoItem < ActiveRecord::Migration
  def change
    add_column :todo_items, :finished, :boolean, default: false
  end
end
