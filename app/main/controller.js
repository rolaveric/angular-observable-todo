'use strict';
import _ from 'lodash';

class MainController {
  constructor($scope, dataModel) {
    this.dataModel = dataModel;
    this.hideCompleted = false;

    // TODO: Can the service just return 1 observable that controllers then subscribe to?
    $scope.$toObservable(() => this.dataModel.all(), false)
      .subscribe((change) => this.unfilteredTodos = change.newValue);

    $scope.$toObservable('mainCtrl.hideCompleted', false)
      .subscribe((change) => this.todos = this.filterTodos(this.unfilteredTodos));

    $scope.$toObservable('mainCtrl.unfilteredTodos', false)
      .subscribe((change) => this.todos = this.filterTodos(this.unfilteredTodos));

    this.todoChanged = (todo) => {
      this.dataModel.update(todo);
    };

    this.deleteClicked = (todo) => {
      this.dataModel.remove(todo);
    };

    this.createClicked = () =>{
      this.dataModel.create();
    };

    this.filterTodos = (todos) => this.hideCompleted ? _.reject(todos, 'completed') : todos;
  }
}
MainController.$inject = ['$scope', 'TodoDataModel'];

export default MainController;