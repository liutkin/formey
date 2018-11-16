var defaultOptions = {
  formAttributeName: 'data-submit-once',
  progressTextAttributeName: 'data-submit-text',
};

function formey(userOptions = {}) {
  const options = { ...defaultOptions, ...userOptions };
  const { formAttributeName, progressTextAttributeName } = options;

  document.querySelectorAll(`[${formAttributeName}]`).forEach(formEl => {
    const buttonsAndInputsEls = formEl.querySelectorAll('button, input');
    const submitEl = Array.prototype.find.call(
      buttonsAndInputsEls,
      el => el.type === 'submit',
    );
    const dataProgressText = submitEl.getAttribute(progressTextAttributeName);
    const progressText = dataProgressText && dataProgressText.trim();

    formEl.removeAttribute(formAttributeName);
    submitEl.removeAttribute(progressTextAttributeName);

    formEl.addEventListener('submit', function(e) {
      e.preventDefault();

      formEl.submit();

      formEl
        .querySelectorAll('fieldset')
        .forEach(fieldsetEl => (fieldsetEl.disabled = true));

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

export default formey;
