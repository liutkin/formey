(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.formey = factory());
}(this, (function () { 'use strict';

  var defaultOptions = {
    formAttr: 'data-submit-once',
    submitTextAttr: 'data-submit-text',
    submitInProcessAttr: false,
    clearAttrsOnInit: true
  };

  var getFirstSubmitTrigger = (function (formEl) {
    return Array.prototype.find.call(formEl.querySelectorAll('button, input'), function (el) {
      return el.type === 'submit';
    });
  });

  var getTrimmedAttr = (function (el, attr) {
    return el.getAttribute(attr) && el.getAttribute(attr).trim();
  });

  var removeAttrs = (function (list) {
    return list.forEach(function (item) {
      return item.el.removeAttribute(item.attr);
    });
  });

  var disableFormControls = (function (formEl) {
    return formEl.querySelectorAll('button, input, select, textarea').forEach(function (el) {
      return el.disabled = true;
    });
  });

  var setSubmitText = (function (el, text) {
    if (el.tagName === 'BUTTON') {
      el.textContent = text || el.textContent;
    } else if (el.tagName === 'INPUT') {
      el.value = text || el.value;
    }
  });

  var setTrimmedAttr = (function (el, attr) {
    return attr && el.setAttribute(attr.trim(), true);
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function formey() {
    var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var options = _extends({}, defaultOptions, userOptions);
    var formAttr = options.formAttr,
        submitTextAttr = options.submitTextAttr,
        submitInProcessAttr = options.submitInProcessAttr,
        clearAttrsOnInit = options.clearAttrsOnInit;


    document.querySelectorAll('[' + formAttr + ']').forEach(function (formEl) {
      var submitEl = getFirstSubmitTrigger(formEl);
      var submitText = getTrimmedAttr(submitEl, submitTextAttr);
      var formSubmitted = false;

      clearAttrsOnInit && removeAttrs([{ el: formEl, attr: formAttr }, { el: submitEl, attr: submitTextAttr }]);

      formEl.addEventListener('submit', function (e) {
        e.preventDefault();

        if (formSubmitted) return;

        formEl.submit();

        disableFormControls(formEl);
        setSubmitText(submitEl, submitText);
        setTrimmedAttr(submitEl, submitInProcessAttr);

        submitEl.style.cursor = 'not-allowed';

        formSubmitted = true;
      });
    });
  }

  return formey;

})));
