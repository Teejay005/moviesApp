exports.config = {

  seleniumServerJar: 'node_modules/selenium-standalone/.selenium/2.42.0/server.jar',

  chromeDriver: '/usr/local/bin/chromedriver',
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:3000',

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>  
  rootElement: 'html',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  // Spec patterns are relative to the configuration file location passed
  // to proractor (in this example conf.js).
  // They may include glob patterns.
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};