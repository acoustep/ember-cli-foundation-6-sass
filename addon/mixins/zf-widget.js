import Ember from 'ember';

/**
 * Mixin that was shamelessly ripped off from the Ember jQuery UI folks (hey, why reinvent the
 * wheel). This makes it drop dead simple to convert between Zurb Foundation land and the land
 * of Ember filled with Chocolate rivers and gumdrop rainbows. And bacon. Lot's and lots of
 * bacon.
 */
export default Ember.Mixin.create({

  /**
   * Handle setup of this components' DOM element.
   */
  setup: Ember.on('didInsertElement', function() {

    Ember.run.scheduleOnce('afterRender', () => {

      // Adapt the options
      let options = this._adaptOptions();

      // Instantiate widget
      let zfType = this.get('zfType');
      let controlId = this.get('controlId');
      let ui = new Foundation[zfType](this.$(controlId), options);
      this.set('zfUi', ui);

      // Perform any custom handling
      if (Ember.isPresent(this.handleInsert)) {
        this.handleInsert();
      }
    });
  }),



  /**
   * Handle destruction of component.
   */
  shutdown: Ember.on('willDestoryElement', function() {
    let ui = this.get('zfUi');

    if (Ember.isPresent(ui)) {
      let observers = this._observers;

      // Nuke any observers that were created
      for (var opKey in observers) {
        if (observers.hasOwnProperty(opKey)) {
          this.removeObserver(opKey, observers[opKey]);
        }
      }

      // Finally destory everything else.
      ui.destroy();
    }
  }),



  /**
   * Translate the options from the Ember way to foundation.
   * @return {Object}  An object containing our options.
   */
  _adaptOptions: function() {
    let fdnOptions = this.get('zfOptions') || [];
    let options = {};

    // We are going to be observing changes. Initialze our cached observer list
    this._observers = this._observers || {};

    let observer = function(sender, key) {
      // Update options dynamically
      let value = sender.get(key);
      let ui = sender.get('zfUi');
      ui.options[this._getZfOpKey(key)] = value;
    };

    // Each component can specify a list of options that will be exposed to an external
    // consumer. Iterate through the options and build up the options object that gets returned
    for (var opKey of fdnOptions) {
      let zfOpKey = this._getZfOpKey(opKey);
      options[zfOpKey] = this.get(opKey);

      // We also want to observe any changes so observe each component and push any updates
      // to foundation.

      this.addObserver(opKey, observer);

      // Cache the obsever so we can be a well behaved compoent and unsubscribe later
      this._observers[opKey] = observer;
    }

    return options;
  },



  /**
   * Get a "Zurb Foundation" specific options key. In some cases, ZF overloads existing ember
   * component fields. We handle this by prefacing the options with "zf-". So layout (used by
   * Ember) becomes "zf-layout".
   * @param  {string} opKey Options key.
   * @return {string}       Zurb foundation specific options key.
   */
  _getZfOpKey(opKey) {
    let retVal = opKey;
    let zfPreamble = 'zf-';
    if (true === opKey.startsWith(zfPreamble)) {
      retVal = opKey.substring(zfPreamble.length);
    }

    return retVal;
  }
});
