angular.module("textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("textarea.html",
    "<div class=\"control-group\" ng-class=\"{'error' : $field.$invalid && $field.$dirty, 'success' : $field.$valid && $field.$dirty}\">" +
    "  <label class=\"control-label\">{{label}}</label>" +
    "  <div class=\"controls\">" +
    "    <textarea></textarea>" +
    "    <validation-messages></validation-messages>" +
    "  </div>" +
    "</div>");
}]);
