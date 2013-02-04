angular.module("input.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("input.html",
    "<div class=\"control-group\" ng-class=\"{'error' : $field.$invalid && $field.$dirty, 'success' : $field.$valid && $field.$dirty}\">" +
    "  <label class=\"control-label\" >{{label}}</label>" +
    "  <div class=\"controls\">" +
    "    <input>" +
    "    <span class=\"help-inline\" " +
    "      ng-repeat=\"(key, error) in $field.$error\"" +
    "      ng-show=\"error && $field.$dirty\"" +
    "      bind-validation-message=\"{{key}}\"></span>" +
    "  </div>" +
    "</div>");
}]);
