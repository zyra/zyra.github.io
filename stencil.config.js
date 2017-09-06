exports.config = {
  bundles: [
    { components: ['my-app', 'site-header', 'site-nav'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
