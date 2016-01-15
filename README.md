# Ember CLI Foundation 6 SASS

## Getting Started

Run the generator to install the dependencies

```bash
ember g ember-cli-foundation-6-sass
```

Then, either let the generator add the `app.scss` file, or include the following in your existing one:

```
@import 'foundation';
@include foundation-everything;
```

See Foundation 6 documentation for details.

http://foundation.zurb.com/sites/docs/

## Installation

```
npm install --save-dev ember-cli-sass
ember install ember-cli-foundation-6-sass
ember g ember-cli-foundation-6-sass
```

## Javascript

To use Foundation's Javascript features add ```foundationJS``` to your Ember app's options.

```javascript
// ember-cli-build.js

/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    }
  });

  return app.toTree();
};
```

Make a component which calls Foundation.

```bash
ember g component app-canvas
```

```javascript
// app/components/app-canvas.js
import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement() {
    this.$().foundation();
  }
});
```

```hbs
{{!-- app/templates/components/app-canvas.hbs --}}
{{yield}}
```

Place the component block inside of application.hbs or with any Foundation Javascript code.

```hbs
{{!-- Example Foundation accordion menu --}}
{{#app-canvas}}
  <ul class="vertical menu" data-accordion-menu>
    <li>
      <a href="#">Item 1</a>
      <ul class="menu vertical nested is-active">
        <li>
          <a href="#">Item 1A</a>
          <ul class="menu vertical nested">
            <li><a href="#">Item 1Ai</a></li>
            <li><a href="#">Item 1Aii</a></li>
            <li><a href="#">Item 1Aiii</a></li>
          </ul>
        </li>
        <li><a href="#">Item 1B</a></li>
        <li><a href="#">Item 1C</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Item 2</a>
      <ul class="menu vertical nested">
        <li><a href="#">Item 2A</a></li>
        <li><a href="#">Item 2B</a></li>
      </ul>
    </li>
    <li><a href="#">Item 3</a></li>
  </ul>
{{/app-canvas}}
```
