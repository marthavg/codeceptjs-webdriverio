exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://simple.ripley.com.pe/',
      browser: 'chrome'
    },
    AssertWrapper:{
      require: 'codeceptjs-assert'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/*.feature',
    steps: './src/steps/*.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './src/*_test.js',
  name: 'WEB'
}