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
    $listElement.data('id', this.id);

    $elementDiv.text(this.description);

    if(this.finished === false) {
      $elementDiv.append(this.createButtons());
    }

    $listElement.append($elementDiv);
    return $listElement;
  },

  createButtons: function() {
    var buttonContainer = $('<div>');
    buttonContainer.addClass("buttons");

    var deleteButton = $('<span>').addClass("glyphicon glyphicon-trash delete-button");
    var finishButton = $('<span>').addClass("glyphicon glyphicon-ok finish-button");

    buttonContainer.append(finishButton);
    buttonContainer.append(deleteButton);
    return buttonContainer;
  },

  finishItem: function() {
    this.finished = true;
  }

};
