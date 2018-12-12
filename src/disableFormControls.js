export default formEl =>
  formEl
    .querySelectorAll('input, select, textarea')
    .forEach(el => el.setAttribute('readonly', 'readonly'));
