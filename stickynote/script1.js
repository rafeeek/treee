function(ev) {
  if (composing) return;
  var value = element.val();
  if (msie && (ev || noevent).type === "input" && element[0].placeholder !== placeholder) {
    placeholder = element[0].placeholder;
    return
  }
  if (type !== "password" && toBoolean(attr.ngTrim || "T")) {
    value = trim(value)
  }
  var revalidate = validity && ctrl.$$hasNativeValidators;
  if (ctrl.$viewValue !== value || value === "" && revalidate) {
    if (scope.$root.$$phase) {
      ctrl.$setViewValue(value)
    } else {
      scope.$apply(function() {
        ctrl.$setViewValue(value)
      })
    }
  }
}