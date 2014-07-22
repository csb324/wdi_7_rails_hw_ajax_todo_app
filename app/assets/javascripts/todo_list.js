var TodoApp = TodoApp || {};

TodoApp.TodoList = {


  getTodos: function() {
    $.ajax({
      url: 'http://localhost:3000/todo_items.json',
      type: 'GET',
    })
    .done(function() {
      console.log("success");
    });
  }

};
