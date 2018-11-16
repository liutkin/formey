import defaultOptions from './defaultOptions';

export default function formey(userOptions = {}) {
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
    const state = {
      formSubmitted: false,
      progressText,
    };

    formEl.removeAttribute(formAttributeName);
    submitEl.removeAttribute(progressTextAttributeName);

    formEl.addEventListener('submit', function(e) {
      e.preventDefault();

      if (state.isFormSubmitted) return;

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

      state.formSubmitted = true;
    });
  });
}
