import defaultOptions from './defaultOptions';
import getFirstSubmitTrigger from './getFirstSubmitTrigger';
import getTrimmedAttr from './getTrimmedAttr';
import removeAttrs from './removeAttrs';
import disableFormControls from './disableFormControls';
import setSubmitText from './setSubmitText';
import setTrimmedAttr from './setTrimmedAttr';

export default function formey(userOptions = {}) {
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
