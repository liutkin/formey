export default formEl =>
  formEl
    .querySelectorAll('button, input, select, textarea')
    .forEach(el => el.setAttribute('readonly', 'readonly'));
