import disableFormControls from '../src/disableFormControls';

test('must disable every button, input, select and textarea', () => {
  const controls = [];
  const formEl = document.createElement('form');
  const inputTypes = [
    'text',
    'number',
    'email',
    'password',
    'tel',
    'search',
    'button',
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
  const buttonEl = document.createElement('button');
  const textareaEl = document.createElement('textarea');
  controls.push(buttonEl, textareaEl);

  formEl.appendChild(buttonEl);
  formEl.appendChild(textareaEl);

  disableFormControls(formEl);

  controls.forEach(el => {
    expect(el.readOnly).toBe(true);
  });
});
