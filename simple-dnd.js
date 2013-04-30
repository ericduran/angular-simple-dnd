/**
 * Angular Simple Drag and Drop Event.
 *
 * @example <div dnd-dragover="blah($event)">
 * @example <div dnd-dragEnd="foo($event)">
 * @example <div dnd-drop="bar($event)">
 */
var dndModule = angular.module('ericduran.dnd', []);
['Dragstart', 'Drag', 'Dragenter', 'Dragleave', 'Dragover', 'Drop', 'Dragend'].forEach(
  function(name) {
    'use strict';
    var directiveName = 'dnd' + name;
    dndModule.directive(directiveName, ['$parse', function($parse, $scope) {
      return function(scope, element, attr) {
        var fn = $parse(attr[directiveName]);
        element.bind(name.toLowerCase(), function(event) {
          scope.$apply(function() {
            fn(scope, {$event:event});
          });
        });
      };
    }]);
  }
);
