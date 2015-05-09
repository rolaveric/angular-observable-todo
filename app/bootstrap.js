'use strict';
import angular from 'angular';
import mainDirective from 'app/main/directive';
import TodoDataModel from 'app/dataModel/service'
import 'font-awesome/css/font-awesome.css!';
import 'bootstrap/css/bootstrap.css!';
import rxModule from 'rx-angular';

angular.module('angular-observable-todo', [rxModule])
  .directive('angularObservableTodo', mainDirective)
  .service('TodoDataModel', TodoDataModel);

angular.bootstrap(document.body, ['angular-observable-todo']);