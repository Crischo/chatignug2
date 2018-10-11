// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   // Initialize Firebase
  firebase:{
    apiKey: "AIzaSyAEnGCT9CTj6af9436tBi0dnpDhW1a6IjQ",
    authDomain: "chat3-f6358.firebaseapp.com",
    databaseURL: "https://chat3-f6358.firebaseio.com",
    projectId: "chat3-f6358",
    storageBucket: "chat3-f6358.appspot.com",
    messagingSenderId: "169759824186"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
