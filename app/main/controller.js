'use strict';
class MainController {
  constructor(dataModel) {
    this.dataModel = dataModel;
    this.hideCompleted = false;
    this.todos = this.dataModel.all(this.hideCompleted);
  }

  refreshList() {
    this.todos = this.dataModel.all(this.hideCompleted);
  }

  todoChanged(todo) {
    this.dataModel.update(todo);
    this.refreshList();
  }

  deleteClicked(todo) {
    this.dataModel.remove(todo);
    this.refreshList();
  }

  createClicked() {
    this.dataModel.create();
    this.refreshList();
  }
}
MainController.$inject = ['TodoDataModel'];

export default MainController;