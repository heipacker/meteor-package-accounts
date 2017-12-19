Package.describe({
  name: 'moac:accounts',
  summary: 'Provides and updates the moac accounts in the Accounts collection',
  version: '0.1.0',
  git: 'http://github.com/heipacker/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('moac:web3@0.1.0', ['client', 'server']);

  api.export(['McAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('moac:accounts');
//   api.addFiles('accounts-tests.js');
// });

