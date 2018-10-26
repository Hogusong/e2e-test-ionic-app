# my-ionic-app
  - To set up e2e testing 
-----------------------

## Create a new ionic project "my-ionic-app"
  - Install ionic globally. 
      Run `npm install -g ionic@latest`
  - create a new project. We recommend using the tutorial starter for your first app. See [Starter Templates](https://ionicframework.com/docs/cli/starters.html) for a full list. 
      Run `ionic start my-ionic-app`

## Update package.json

### Install dependencies
  - npm install @angular/router@5.2.11
  - npm install core-js

### Install devDependencies
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

## Create e2e folder in working root
  - e2e folder contains one subfolder and two config files.
    - `src` : subfolder
    - `protractor.conf.js` : Protractor config file 
    - `tsconfig.e2e.json`  : TypeScript config file for end-to-end testing
  - src folder contains all testing files as `*.e2e-spec.ts and *.po.ts`
 
## Create several config files in src folder
  - `karma.conf.js` : Karma knows about your project in order to test it via this configuration file. Here [more information](https://karma-runner.github.io/1.0/config/configuration-file.html)
  - `polyfills.ts`  : polyfills.ts file is auto generated while creating an Angular application using Angular Cli. It makes your application compatible for different browsers. Here [more information](https://angular.io/guide/browser-support)
  - `tsconfig.spec.json` and `tsconfig.app.json`: These are TypeScript config files for unit testing. 

## Create a config file for Angular 6 project
  - `angular.json` : aka Angular Workspace
  - Copy from a new Angular 6 project and past it in project folder.
  - update all project infomations such as project name and file path