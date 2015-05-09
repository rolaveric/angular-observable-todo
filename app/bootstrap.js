'use strict';
import angular from 'angular';
import mainDirective from 'app/main/directive';
import TodoDataModel from 'app/dataModel/service'
import 'font-awesome/css/font-awesome.css!';
import 'bootstrap/css/bootstrap.css!';

angular.module('angular-observable-todo', [])
  .directive('angularObservableTodo', mainDirective)
  .service('TodoDataModel', TodoDataModel);