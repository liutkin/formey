import setTrimmedAttr from './setTrimmedAttr';

test('must set given attr', () => {
  const el = document.createElement('div');
  const attr = '  data-foo            ';

  setTrimmedAttr(el, attr);

  expect(el.getAttribute('data-foo')).toBe('true');
});
