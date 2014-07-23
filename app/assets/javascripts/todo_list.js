var TodoApp = TodoApp || {};

TodoApp.TodoList = {

  buildListCallback: function(todos) {
    var $todolist;
    todos.forEach(function(todoItem) {
      var singleTodo = new TodoItem(todoItem);
      var $singleTodoShow = singleTodo.showView();

      if (sindleTodo.finished === true){
        $todolist = $('.finished-things-list');
      } else if (singleTodo.finished === false){
        $todolist = $('.to-do-list');
      }
      $todolist.append($singleTodoShow);
    });
  },

  getLists: function() {
    $.ajax({
      url: 'http://localhost:3000/todo_items.json',
      type: 'GET',
    })
    .done(this.buildListCallback);
  }

};
