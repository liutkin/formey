import setSubmitText from '../src/setSubmitText';

test('must set text to buttons', () => {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'foo';

  setSubmitText(buttonEl, 'bar');
  expect(buttonEl.textContent).toBe('bar');
});

test('must set text to inputs', () => {
  const inputEl = document.createElement('input');
  inputEl.type = 'submit';
  inputEl.value = 'foo';

  setSubmitText(inputEl, 'bar');
  expect(inputEl.value).toBe('bar');
});

test('must not set text if no text given', () => {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'foo';

  const inputEl = document.createElement('input');
  inputEl.type = 'submit';
  inputEl.value = 'foo';

  setSubmitText(buttonEl, '');
  setSubmitText(inputEl, '');

  expect(buttonEl.textContent).toBe('foo');
  expect(inputEl.value).toBe('foo');
});
