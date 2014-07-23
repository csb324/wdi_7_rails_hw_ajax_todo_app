var TodoApp = TodoApp || {};

TodoApp.TodoItem = function(id, description, created_at) {
  this.id = id;
  this.description = description;
  this.created_at = new Date();
  this.finished = false;
};

TodoApp.TodoItem.prototype = {
  showView: function() {
    var $listElement = $('<li>');
    var $elementDiv = $('<div>');
    $listElement.addClass("single-item");

    $elementDiv.text(this.description);

    $listElement.append($elementDiv);
    return $listElement;
  }
};
