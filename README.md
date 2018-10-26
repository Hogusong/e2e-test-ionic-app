# my-ionic-app
To set up e2e testing 
-----------------------

# Create a new ionic project "my-ionic-app"
  - Install ionic globally.
      Run `npm install -g ionic@latest`
  - create a new project. We recommend using the tutorial starter for your first app. See [Starter Templates](https://ionicframework.com/docs/cli/starters.html) for a full list.
      Run `ionic start my-ionic-app`

# Update package.json

## Install dependencies
  - npm install @angular/router@5.2.11
  - npm install core-js

## Install devDependencies
  - npm install --save-d @angular-devkit/build-angular
  - npm install --save-d @angular/cli
  - npm install --save-d @angular/compiler-cli
  - npm install --save-d @angular/language-service
  - npm install --save-d @types/jasmine @types/jasminewd2 @types/node
  - npm install --save-d codelyzer jasmine-core jasmine-spec-reporter
  - npm install --save-d karma karma-chrome-launcher
  - npm install --save-d karma-coverage-istanbul-reporter
  - npm install --save-d karma-jasmine karma-jasmine-html-reporter
  - npm install --save-d protractor ts-node tslint
  - npm install --save-d webdriver-manager webpack

# Create e2e folder in working root
  - e2e folder contains one subfolder and two config files.
    - "src" : subfolder
    - "protractor.conf.js" : Protractor config file 
    - "tsconfig.e2e
  - src folder contains all testing files such as *.e2e-spec.ts and *.po.ts
  - Structure of e2e folder
          my-ionic-app
            e2e
              src
                app.e2e-spec.ts
                app.po.ts
              protractor.conf.js
              tsconfig.e2e.json

