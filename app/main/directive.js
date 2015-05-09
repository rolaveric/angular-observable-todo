'use strict';
import template from 'app/main/template.html!text';
import Controller from 'app/main/controller';

/**
 * Component-like directive to bootstrap the application.
 * @returns {object}
 */
function mainDirective() {
  return {
    template: template,
    controller: Controller,
    controllerAs: 'mainCtrl'
  };
}

export default mainDirective;