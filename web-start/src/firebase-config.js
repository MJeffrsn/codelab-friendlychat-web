/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyATBlEtsHNaeLxTmxjMzJaM83xAV3EyF4I",
  authDomain: "friendlychat-3f47b.firebaseapp.com",
  projectId: "friendlychat-3f47b",
  storageBucket: "friendlychat-3f47b.appspot.com",
  messagingSenderId: "886970029982",
  appId: "1:886970029982:web:878fdf9bb810a6ad3b688f",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
