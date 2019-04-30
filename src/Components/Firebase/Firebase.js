import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCo_UWviUXuQWLZvHNhs6sAGFpj6fb5aqo",
  authDomain: "chat-room-ae5c0.firebaseapp.com",
  databaseURL: "https://chat-room-ae5c0.firebaseio.com",
  projectId: "chat-room-ae5c0",
  storageBucket: "chat-room-ae5c0.appspot.com",
  messagingSenderId: "707975687741"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
