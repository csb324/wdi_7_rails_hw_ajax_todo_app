class CreateTodoItemTable < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.text :description
      t.timestamps
    end
  end
end
