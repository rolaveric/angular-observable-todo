'use strict';
import _ from 'lodash';

class MainController {
  constructor($scope, dataModel) {
    this.dataModel = dataModel;

    // Properties

    this.hideCompleted = false;
    this.rawTodos = [];
    this.viewTodos = [];

    // Methods

    this.todoChanged = (todo) => {
      this.dataModel.update(todo);
    };

    this.deleteClicked = (todo) => {
      this.dataModel.remove(todo);
    };

    this.createClicked = () => {
      this.dataModel.create();
    };

    this.updateTodosView = () => {
      this.viewTodos = this.hideCompleted ? _.reject(this.rawTodos, 'completed') : this.rawTodos;
    };

    // Watc- Oberservables

    /**
     * Observes the raw todos data from the data store.
     * Reacts by updating the local reference.
     */
    $scope.$toObservable(() => this.dataModel.all(), false)
      .subscribe((change) => this.rawTodos = change.newValue);

    /**
     * Observes the 'hide completed' filter.
     * Reacts by updating the view model.
     */
    $scope.$toObservable('mainCtrl.hideCompleted', false)
      .subscribe(this.updateTodosView);

    /**
     * Observes the local reference to the raw todos data.
     * Reacts by updating the view model.
     */
    $scope.$toObservable('mainCtrl.rawTodos', false)
      .subscribe(this.updateTodosView);
  }
}
MainController.$inject = ['$scope', 'TodoDataModel'];

export default MainController;