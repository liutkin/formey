export default (el, attr) =>
  el.getAttribute(attr) && el.getAttribute(attr).trim();
