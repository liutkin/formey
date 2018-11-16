import getTrimmedAttr from './getTrimmedAttr';

test('must return trimmed attr value', () => {
  const el = document.createElement('div');
  el.setAttribute('data-foo', '   bar      ');

  expect(getTrimmedAttr(el, 'data-foo')).toBe('bar');
});
