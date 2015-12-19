module.exports = {
  description: 'install ember-cli-foundation-6-sass into a typical project',
  normalizeEntityName: function() {},

  beforeInstall: function () {
    return this.addBowerPackageToProject('foundation-sites', '~6.0.3');
  },

  afterInstall: function () {
    return this.addPackageToProject('ember-cli-sass', '^5.1.0');
  }
};
