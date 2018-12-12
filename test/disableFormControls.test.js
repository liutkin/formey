import disableFormControls from '../src/disableFormControls';

test('must disable every input, select and textarea', () => {
  const controls = [];
  const formEl = document.createElement('form');
  const inputTypes = [
    'text',
    'number',
    'email',
    'password',
    'tel',
    'search',
    'date',
    'checkbox',
    'radio',
    'range',
    'reset',
  ];
  inputTypes.forEach(type => {
    const inputEl = document.createElement('input');
    inputEl.type = type;
    controls.push(inputEl);
    formEl.appendChild(inputEl);
  });
  const textareaEl = document.createElement('textarea');
  controls.push(textareaEl);

  formEl.appendChild(textareaEl);

  disableFormControls(formEl);

  controls.forEach(el => {
    expect(el.getAttribute('readonly')).toBe('readonly');
  });
});
