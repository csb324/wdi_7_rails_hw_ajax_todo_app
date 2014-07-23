var TodoApp = TodoApp || {};

TodoApp.TodoList = {

  buildListCallback: function(todos) {
    var $todolist;
    todos.forEach(function(todoItem) {
      var singleTodo = new TodoApp.TodoItem(todoItem);
      var $singleTodoShow = singleTodo.showView();

      if (singleTodo.finished === true){
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
  },

  addTodoItem: function(event) {
    event.preventDefault();

    var $form = $(event.target);
    var $description = $form.find("#to-do-field").val();
    var $now = new Date();
    var request = {description: $description, created_at: $now};


    $.ajax({
      url: 'http://localhost:3000/todo_items.json',
      type: 'POST',
      data: request,
      dataType: 'json'
    })
    .done(function(data) {
      console.log(data);
    });
  }

};

TodoApp.init = function() {

  this.TodoList.getLists();

  $('#to-do-form').submit(this.TodoList.addTodoItem);

};
