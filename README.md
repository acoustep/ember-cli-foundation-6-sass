# Ember CLI Foundation 6 SASS

## Installation

```
npm install --save-dev ember-cli-sass
ember install ember-cli-foundation-6-sass
```

## Getting Started

Run the generator to install the dependencies

```bash
ember g ember-cli-foundation-6-sass
```

Then, either let the generator add the `app.scss` file, or include the following in your existing one:

```
// For foundation-sites <= 6.3.0
// @import 'foundation';
// For foundation-sites >= 6.3.0
@include foundation-everything;
```
Note - Due to [issue](https://github.com/acoustep/ember-cli-foundation-6-sass/issues/44) introduced by `foundation-sites@6.3.0`, you should use the following in your `app.scss` until the issue resolved.
```
@import "foundation-sites/foundation";
```
Also, if you encountered error `Error: File to import not found or unreadable: util/util.`, you need to include
```
@import "foundation-sites/util/util";
```


See Foundation 6 documentation for details.

http://foundation.zurb.com/sites/docs/

If you want to include just the partials that you are actually using in your app, copy the `foundation-everything` mixin
into a `foundation-custom` file, and import that mixin instead of the `foundation-everything` mixin. Then you can adjust
what is and isn't included by editing the `foundation-custom` file. Warning: you will need to manage your dependencies
and styles manually if going this route.

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

## Javascript Partials

To use only parts of Foundation's Javascript features add ```foundationJS``` to your
Ember app's options with an array of the elements to include. Remove the elements that
should not be included. Using this method will require managing the dependencies for each
component and making sure the appropriate `util.` files are included for the components
being included. Because Foundation since v6.2 has written the modules in ES6, they need
to be transpiled to ES5 (Ember does not transpile the vendors.js files).

```javascript
// ember-cli-build.js

/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-foundation-6-sass': {
            'foundationJs': [
                'core',
                'util.box',
                'util.keyboard',
                'util.mediaQuery',
                'util.motion',
                'util.nest',
                'util.timerAndImageLoader',
                'util.touch',
                'util.triggers',
                'abide',
                'accordion',
                'accordionMenu',
                'drilldown',
                'dropdown',
                'dropdownMenu',
                'equalizer',
                'interchange',
                'magellan',
                'offcanvas',
                'orbit',
                'responsiveMenu',
                'responsiveToggle',
                'reveal',
                'slider',
                'sticky',
                'tabs',
                'toggler',
                'tooltip'
            ]
        },
    }
  });

  return app.toTree();
};
```

## Included components

All of the Foundation components which require Javascript have been turned into Ember components.

The vast majority of the Foundation Javascript options have been exposed as component parameters.
See the Zurb Foundation for Sites documentation for any specifics.

Any exceptions are documented below.

Each Foundation Javascript widget can be directly accessed through the zfUi property. For example,
the following would call the open method on the reveal component:

```javascript
myRevealComponent.get('zfUi').open();
```

A full sample is available in tests/dummy/app/templates/application.hbs

To run the sample, clone this repo and run:

```bash
npm install
bower install
ember serve
```

### Accordion Menu

Usage

```hbs
{{#zf-accordion-menu}}
  <li>
    <a href="#">Item 1</a>
    <ul class="menu vertical nested">
      <li><a href="#">Item 1A</a></li>
      <li><a href="#">Item 1B</a></li>
    </ul>
  </li>
  <li><a href="#">Item 2</a></li>
{{/zf-accordion-menu}}
```

### Accordion

Usage

```hbs
{{#zf-accordion}}
  <li class="accordion-item is-active" data-accordion-item>
    <a class="accordion-title">Accordion 1</a>
    <div class="accordion-content" data-tab-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title">Accordion 2</a>
    <div class="accordion-content" data-tab-content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquid, optio ab!
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title">Accordion 3</a>
    <div class="accordion-content" data-tab-content>
      I would start in the open state, due to using the `is-active` state class.
    </div>
  </li>
{{/zf-accordion}}
```

### Callout (With `ember-cli-flash` Integration)

This addon tends to avoid markup-only related components, this component is a special case.
This is a good way to easily provide a flash-message-style component to your Ember app.

This is designed to integrate with the [ember-cli-flash](https://github.com/poteto/ember-cli-flash) addon
(which provides a foundation5 styling option)

Usage with ember-cli-flash

```hbs
  {{#each flashMessages.queue as |flash|}}
    {{zf-callout flash=flash}}
  {{/each}}

```

If you want to bring your own data and actions:

```hbs
  {{zf-callout type="success" content="add content here"}}
```

Or use block params:

```hbs
  {{#zf-callout}}
    Oops, something happened, but I don't know what.
  {{/zf-callout}}
```


### Drilldown Menu

Usage

```hbs
{{#zf-drilldown-menu}}
  <li>
    <a href="#">Item 1</a>
    <ul class="vertical menu">
      <li><a href="#">Item 1A</a></li>
    </ul>
  </li>
  <li><a href="#">Item 2</a></li>
{{/zf-drilldown-menu}}
```

### Dropdown Menu

Usage

```hbs
{{#zf-dropdown-menu class="vertical"}}
  <li>
    <a href="#">Item 1</a>
    <ul class="menu">
      <li><a href="#">Item 1A</a></li>
    </ul>
  </li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a></li>
{{/zf-dropdown-menu}}
```

### Dropdown

Usage

```hbs
<button class="button" data-toggle="example-dropdown">Toggle Dropdown</button>
{{#zf-dropdown id="example-dropdown"}}
  Example form in a dropdown.
  <form>
    <div class="row">
      <div class="medium-6 columns">
        <label>Name
          <input type="text" placeholder="Kirk, James T.">
        </label>
      </div>
      <div class="medium-6 columns">
        <label>Rank
          <input type="text" placeholder="Captain">
        </label>
      </div>
    </div>
  </form>
{{/zf-dropdown}}
```

### Magellan

Usage

```hbs
{{#zf-magellan}}
  <li><a href="#reveal">Reveal</a></li>
  <li><a href="#accordion-menu">Accordion Menu</a></li>
  <li><a href="#accordion">Accordion</a></li>
{{/zf-magellan}}

<div class="row" id="reveal">
<!-- Your content here -->
</div>

<div class="row" id="accordion-menu">
<!-- Your content here -->
</div>

<div class="row" id="accordion">
<!-- Your content here -->
</div>
```

### Off-canvas

There are several additional options outside of the documented options on the Zurb Foundation
site.

| Option | Description |
| --- | --- |
| showLeftOffCanvas | Show left off-canvas element |
| showRightOffCanvas | Show right off-canvas element |

Accessing the zf widget directly is a bit different with the off-canvas component. In the case
of a single off canvas element (i.e. left *or* right ) the zfUi element can be accessed. However,
if both the showLeftOffCanvas and showRightOffCanvas flags are set, this is a bit problematic.
An array containing both of the elements can be accessed as the zfUiList member.

Usage. This illustrates both a left and right off-canvas widget.

```hbs
{{#zf-off-canvas showRightOffCanvas=true as |section| }}

  {{#if section.isOffCanvasLeft}}
    <p>Example left off canvas content</p>
  {{else if section.isOffCanvasRight}}
    <p>Example right off canvas content</p>
  {{else}}

    <!-- Main body goes here -->

    <!-- Buttons to toggle off canvas -->

    <button class="button" data-toggle="zf-off-canvas-left">Toggle Off-canvas Left</button>
    <button class="button" data-toggle="zf-off-canvas-right">Toggle Off-canvas Right</button>

  {{/if}}
{{/zf-off-canvas}}
```

### Orbit

The following options are not yet supported:
* animInFromRight
* animOutToRight
* animInFromLeft
* animOutToLeft
* useMUI

Usage

```hbs
{{#zf-orbit nav-buttons=true}}
  <ul class="orbit-container">
    <button class="orbit-previous" aria-label="previous"><span class="show-for-sr">Previous Slide</span>&#9664;</button>
    <button class="orbit-next" aria-label="next"><span class="show-for-sr">Next Slide</span>&#9654;</button>
    <li class="is-active orbit-slide">
      <div>
        <h3 class="text-center">1: You can also throw some text in here!</h3>
        <p class="text-center">Achieve an animation-free Orbit with the data attribute data-use-m-u-i="false"</p>
        <h3 class="text-center">This Orbit slider does not use animations.</h3>
      </div>
    </li>
    <li class="orbit-slide">
      <div>
        <h3 class="text-center">2: You can also throw some text in here!</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Unde harum rem, beatae ipsa consectetur quisquam. Rerum ratione, delectus atque
          tempore sed, suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora
          expedita.
        </p>
        <h3 class="text-center">This Orbit slider does not use animations.</h3>
      </div>
    </li>
    <li class="orbit-slide">
      <div>
        <h3 class="text-center">3: You can also throw some text in here!</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde harum rem,
          beatae ipsa consectetur quisquam. Rerum ratione, delectus atque tempore sed,
          suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora expedita.
        </p>
        <h3 class="text-center">This Orbit slider does not use animations.</h3>
      </div>
    </li>
    <li class="orbit-slide">
      <div>
        <h3 class="text-center">4: You can also throw some text in here!</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Unde harum rem, beatae ipsa consectetur quisquam. Rerum ratione, delectus atque
          tempore sed, suscipit ullam, beatae distinctio cupiditate ipsam eligendi tempora
          expedita.
        </p>
        <h3 class="text-center">This Orbit slider does not use animations.</h3>
      </div>
    </li>
  </ul>
  <nav class="orbit-bullets">
   <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span>
     <span class="show-for-sr">Current Slide</span></button>
   <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
   <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
   <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
 </nav>
{{/zf-orbit}}
```

### Reveal

The following options are not yet supported:
* animationIn
* animationOut

Usage

```hbs
<p><a data-open="exampleModal">Click me for a modal</a></p>
{{#zf-reveal id="exampleModal" overlay=showDialogOverlay}}
  <h1>Awesome. I Have It.</h1>
  <p class="lead">Your couch. It is mine.</p>
  <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
  <button class="close-button" data-close aria-label="Close reveal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
{{/zf-reveal}}
<p>{{input type="checkbox" name="showDialogOverlay" checked=showDialogOverlay}} Show Overlay</p>
```

### Slider

Usage

```hbs
{{#zf-slider}}
  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <input type="hidden">
{{/zf-slider}}
```

### Tabs

Usage

```hbs
{{#zf-tabs id="example-tabs"}}
  <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
  <li class="tabs-title"><a href="#panel2">Tab 2</a></li>
{{/zf-tabs}}
<div class="tabs-content" data-tabs-content="example-tabs">
  <div class="tabs-panel is-active" id="panel1">
    <p>
      Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus
      ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est
      bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
    </p>
  </div>
  <div class="tabs-panel" id="panel2">
    <p>
      Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie
      vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis
      nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
    </p>
  </div>
</div>
```

### Tooltip

The template option has been renamed to zf-template as this causes a collision with an existing
Ember component member.

Usage

```hbs
<p>
  The {{#zf-tooltip title="Fancy word for a beetle."}}scarabaeus{{/zf-tooltip}} hung quite
  clear of any branches, and, if allowed to fall, would have fallen at our feet. Legrand
  immediately took the scythe, and cleared with it a circular space, three or four yards
  in diameter, just beneath the insect, and, having accomplished this, ordered Jupiter to
  let go the string and come down from the tree.
</p>
```

## Work to do

- [ ] Improve unit and integration tests
- [ ] Improve documentation
- [ ] Create an adapter so Liquid Fire can be used natively instead of Motion
