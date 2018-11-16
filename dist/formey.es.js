var defaultOptions = {
  formAttr: 'data-submit-once',
  submitTextAttr: 'data-submit-text',
  submitInProcessAttr: false,
};

var getFirstSubmitTrigger = formEl =>
  Array.prototype.find.call(
    formEl.querySelectorAll('button, input'),
    el => el.type === 'submit',
  );

var getTrimmedAttr = (el, attr) =>
  el.getAttribute(attr) && el.getAttribute(attr).trim();

var removeAttrs = list => list.forEach(item => item.el.removeAttribute(item.attr));

var disableFormControls = formEl =>
  formEl
    .querySelectorAll('button, input, select, textarea')
    .forEach(el => (el.disabled = true));

var setSubmitText = (el, text) => {
  if (el.tagName === 'BUTTON') {
    el.textContent = text || el.textContent;
  } else if (el.tagName === 'INPUT') {
    el.value = text || el.value;
  }
};

var setTrimmedAttr = (el, attr) => attr && el.setAttribute(attr.trim(), true);

function formey(userOptions = {}) {
  const options = { ...defaultOptions, ...userOptions };
  const { formAttr, submitTextAttr, submitInProcessAttr } = options;

  document.querySelectorAll(`[${formAttr}]`).forEach(formEl => {
    const submitEl = getFirstSubmitTrigger(formEl);
    const submitText = getTrimmedAttr(submitEl, submitTextAttr);
    let formSubmitted = false;

    removeAttrs([
      { el: formEl, attr: formAttr },
      { el: submitEl, attr: submitTextAttr },
    ]);

    formEl.addEventListener('submit', function(e) {
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

export default formey;
