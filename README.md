# 📜️ Formey

[![npm version](https://img.shields.io/npm/v/formey.svg)](https://www.npmjs.com/package/formey)

<br />

* [What is Formey](#what-is-formey)
* [Getting started](#getting-started)
  * [CDN](#cdn)
  * [Download](#download)
  * [NPM](#npm)
* [Usage](#usage)
* [API](#api)
  * [Attributes](#attributes)
  * [Options](#options)
* [License](#license)

<br />

# What is Formey

Formey is a JavaScript code that prevents `<form>` from being submitted after the first submission.

- No dependencies
- Zero-configuration out-of-the-box
- Utilizes HTML5 `data` attributes
- `0.6 kB` gziped

<br />

# Getting started

## CDN

Place the latest production bundle before the closing `</body>` and call `formey`:
```html
<script src="https://unpkg.com/formey"></script>
<script>
  formey();
</script>
```
## Download
Download [`formey.js`](https://raw.githubusercontent.com/lyutkin/formey/master/dist/formey.js) or minified production ready [`formey.min.js`](https://raw.githubusercontent.com/lyutkin/formey/master/dist/formey.min.js). Place it before the closing `</body>` and call dialog `init`:
```html
<script src="script/formey.min.js"></script>
<script>
  formey();
</script>
```

## NPM
Install package with `npm install formey`. Call `formey`:
```javascript
import formey from 'formey';

formey()
```

<br />

# Usage

Use `data` attributes to enable formey prevent form from being submitted more than once.
```html
<form data-submit-once>
  <!-- form markup -->
</form>
```

You can specify `data-submit-text` with custom text on submit trigger (`button` or `input`). Once the form is submitted, submit trigger text will change to then given via `data-submit-text` attribute.
```html
<form data-submit-once>
  <!-- form markup -->
  <button data-submit-text="Sending...">Send</button>
</form>
```

See [Example](https://lyutkin.github.io/formey/).

# API

## Attributes

**Attribute**: `data-submit-once`  
**Value**: *None*.  
**Placement**: `<form>` elements.  
**Description**: Form with this attribute will be prevented from submission more than once.

---

**Attribute**: `data-submit-text`  
**Value**: Any.  
**Placement**: Submit types of `<button>` and `<input>`.  
**Description**: Once the form is submitted, text of element with this attribute will change to the given.

---

## Options

Pass options object to `formey` function. E.g.:
```javascript
formey({
  formAttr: 'data-form',
  submitInProcessAttr: 'data-submitting'
});
```

<br />

| Key  | Type  | Default | Description |
| - | - | - | - |
| `formAttr` | `String` | `data-submit-once` | Data attribute to mark form to be processed. |
| `submitTextAttr` | `String` | `data-submit-text` | Data attribute to specify custom text label for submit trigger element. |
| `submitInProcessAttr` | `String` | `false` | Specified data attribute will be added to the given element after form is being submitted. *(Tip: May be useful for custom CSS styling)* |
| `clearAttrsOnInit` | `Boolean` | `true` | Remove formey data attributes from HTML elements after init. |

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
