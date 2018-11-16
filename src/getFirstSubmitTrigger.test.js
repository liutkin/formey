import getFirstSubmitTrigger from './getFirstSubmitTrigger';

test('must return first submit trigger element met', () => {
  const formEl = document.createElement('form');
  formEl.innerHTML = `
    <fieldset>
      <button type="button">Foo</button>
      <input type="text"/>
    </fieldset>
    <button id="target">Submit</button>
    <input type="submit" value="Bar"/>
  `;
  expect(getFirstSubmitTrigger(formEl).id).toBe('target');
});
