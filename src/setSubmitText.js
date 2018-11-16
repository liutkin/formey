export default (el, text) => {
  if (el.tagName === 'BUTTON') {
    el.textContent = text || el.textContent;
  } else if (el.tagName === 'INPUT') {
    el.value = text || el.value;
  }
};
