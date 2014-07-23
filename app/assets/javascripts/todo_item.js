var TodoApp = TodoApp || {};

TodoApp.TodoItem = function(object) {
  this.id = object.id;
  this.description = object.description;
  this.created_at = object.created_at;
  this.finished = object.finished || false;
  this.updated_at = object.updated_at;
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
