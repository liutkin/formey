export default formEl =>
  formEl
    .querySelectorAll('button, input, select, textarea')
    .forEach(el => (el.disabled = true));
