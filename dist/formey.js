(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.formey = factory());
}(this, (function () { 'use strict';

  var defaultOptions = {
    formAttributeName: 'data-submit-once',
    progressTextAttributeName: 'data-submit-text'
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function formey() {
    var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var options = _extends({}, defaultOptions, userOptions);
    var formAttributeName = options.formAttributeName,
        progressTextAttributeName = options.progressTextAttributeName;


    document.querySelectorAll('[' + formAttributeName + ']').forEach(function (formEl) {
      var buttonsAndInputsEls = formEl.querySelectorAll('button, input');
      var submitEl = Array.prototype.find.call(buttonsAndInputsEls, function (el) {
        return el.type === 'submit';
      });
      var dataProgressText = submitEl.getAttribute(progressTextAttributeName);
      var progressText = dataProgressText && dataProgressText.trim();

      formEl.removeAttribute(formAttributeName);
      submitEl.removeAttribute(progressTextAttributeName);

      formEl.addEventListener('submit', function (e) {
        e.preventDefault();

        formEl.submit();

        formEl.querySelectorAll('fieldset').forEach(function (fieldsetEl) {
          return fieldsetEl.disabled = true;
        });

        submitEl.disabled = true;

        if (submitEl.tagName === 'BUTTON') {
          submitEl.textContent = progressText || submitEl.textContent;
        } else {
          submitEl.value = progressText || submitEl.value;
        }

        submitEl.style.cursor = 'not-allowed';
      });
    });
  }

  return formey;

})));
