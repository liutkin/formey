import removeAttrs from './removeAttrs';

test('must remove given attribute from element', () => {
  const el1 = document.createElement('div');
  el1.setAttribute('data-foo', 'bar');

  const el2 = document.createElement('div');
  el2.setAttribute('data-john', 'doe');

  const list = [
    {
      el: el1,
      attr: 'data-foo',
    },
    {
      el: el2,
      attr: 'data-john',
    },
  ];

  removeAttrs(list);

  expect(el1.getAttribute('data-foo')).toBeNull();
  expect(el2.getAttribute('data-john')).toBeNull();
});
