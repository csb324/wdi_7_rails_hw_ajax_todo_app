var TodoApp = TodoApp || {};

TodoApp.TodoList = {

  buildLists: function(todos) {
    $('ul').empty();
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
    .done(this.buildLists);
  },

  addTodoItem: function(event) {
    event.preventDefault();

    var $form = $(event.target);
    var $description = $form.find("#to-do-field").val();
    $form.find("#to-do-field").val("");
    var request = {description: $description};

    $.ajax({
      url: 'http://localhost:3000/todo_items.json',
      type: 'POST',
      data: { todo_item: request },
      dataType: 'json'
    })
    .done(this.getLists());
  },

  changeTodoItem: function(event) {
    event.preventDefault();
    var $buttonClicked = $(event.target);
    var todoIdentifier = $buttonClicked.parents('li').data('id');

    if( $buttonClicked.hasClass("finish-button") ){
      $.ajax({
        url: 'http://localhost:3000/todo_items/' + todoIdentifier,
        type: 'PUT',
        dataType: 'json',
      })
      .done(this.getLists())
      .fail(function(data) {
        console.log(data);
      });
    } else if ( $buttonClicked.hasClass("delete-button") ) {
      $.ajax({
        url:'http://localhost:3000/todo_items/' + todoIdentifier,
        type: 'DELETE',
        dataType: 'json'
      })
      .done(this.getLists())
      .fail(function(data) {
        console.log(data);
      });
    }


  },

  init: function() {

    this.getLists();
    $('#to-do-form').submit(this.addTodoItem.bind(this));

    $('.to-do-list').on('click', '.buttons .glyphicon', this.changeTodoItem.bind(this));

  }

};

