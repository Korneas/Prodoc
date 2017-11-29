import * as React from 'react';
import { render } from 'react-dom';
import * as firebase from 'firebase';

import { Root } from './Root';

// Inicializar Firebase
var config = {
  apiKey: "AIzaSyDwh9MNRuKHh1r5peqPN9U-L5jVKPUxFBw",
  authDomain: "notes-267ba.firebaseapp.com",
  databaseURL: "https://notes-267ba.firebaseio.com",
  projectId: "notes-267ba",
  storageBucket: "notes-267ba.appspot.com",
  messagingSenderId: "729614414787"
};
firebase.initializeApp(config);

render(
  <Root />,
  document.getElementById('root')
);