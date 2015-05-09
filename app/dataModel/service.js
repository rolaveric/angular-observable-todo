'use strict';
import _ from 'lodash';

/**
 * Data store for Todos.
 * Treats data as immutable.
 */
class TodoDataModel {
  constructor() {
    this.todos = [
      {id: '1', title: 'Use JSPM', completed: true},
      {id: '2', title: 'Use ES6', completed: true},
      {id: '3', title: 'Create TODO App', completed: true},
      {id: '4', title: 'Use immutables', completed: false},
      {id: '5', title: 'Use promises', completed: false},
      {id: '6', title: 'Use observables', completed: false},
      {id: '7', title: 'Use typescript', completed: false}
    ];
  }

  all() {
    return this.todos;
  }

  create() {
    var todo = {id: this.generateGuid(), title: '', completed: false};
    this.todos = [].concat(this.todos, [todo]);
    return todo;
  }

  update(todo) {
    this.todos = [].concat(this.todos);
    this.todos.splice(_.findIndex(this.todos, {id: todo.id}), 1, todo);
  }

  remove(todo) {
    this.todos = [].concat(this.todos);
    this.todos.splice(_.findIndex(this.todos, {id: todo.id}), 1);
  }

  /**
   * Generates a random, non-system specific GUID.
   * From: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
   * @returns {string}
   */
  generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
}

export default TodoDataModel;