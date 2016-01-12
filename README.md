# report-a-cab [WIP]
Report a cab app made using Ionic and Meteor. Just started fresh yet so functionalities are still incomplete.

## Road Map
1. ~~Meteor Integration for backend purposes~~ -Done!
2. ES6 Upgrade
  1. App Restructure for Bower components and Gulp tasks
  2. Babel Integration
3. Improve and check Readme
4. Pan out App Features  
5. Production configurations
6. Authentication and Security
...  
*More to come!*  

## Installation

1. Make sure you have `npm` installed.
1. Install `gulp`, `bower`, `cordova`, and `ionic` globally using npm, if you haven't done it already.
1. Install [Meteor](https://www.meteor.com/install) - `meteor`.
1. Navigate to the project folder, and run the following:
  1. `npm install` to install the dependencies and devDependencies in package.json
  2. `bower install` to install the bower dependencies
  3. `ionic state restore` to install the cordovaPlugins and platforms listed in package.json

## Running

1. Run `ionic serve` to run the app in a browser
2. On a separate terminal, navigate to the `server` folder, and run `meteor` to start the backend server. Optionally, run `meteor mongo` on a separate terminal, to check the collection store.
3. [Requires android development tools to be installed, refer to [Ionic Installation Guide] (http://ionicframework.com/docs/guide/installation.html)] `ionic emulate android` to run Android emulator, or `ionic run android` to run in phone
