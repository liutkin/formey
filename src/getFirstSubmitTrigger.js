export default formEl =>
  Array.prototype.find.call(
    formEl.querySelectorAll('button, input'),
    el => el.type === 'submit',
  );
