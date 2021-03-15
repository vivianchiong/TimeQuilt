import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import {Alert} from "react-native";

/*
 * Registers the user into the database using their email and password.
 */
export async function registration(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        pics: []
      });
  } catch (err) {
    Alert.alert(err.message, "Please try again!");
  }
}

/*
 * Signs in the user using their email and password.
 */
export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert(err.message, "Please try again!");
  }
}

/*
 * Logs the current user out.
 */
export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert(err.message, "Please try again!");
  }
}

/*
 * Updates the description of a picture in the database.
 */
export async function updateDescriptionDB(picID, descrip) {
  try {
    const db = firebase.firestore();
    db.collection('pictures')
      .doc(picID)
      .update({
        description: descrip
      });
  } catch (err) {
    Alert.alert(err.message, "Please try again!");
  }
}

/*
 * Adds a picture as a document in the `pictures` collection in the database.
 */
export async function addPicDB(picUri) {
  try {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const picDate = month + '/' + date + '/' + year; // march 12 2021 == 3/12/2021

    const db = firebase.firestore();
    const { id: picID } = await db.collection("pictures")
      .add({
        uri: picUri,
        description: '',
        date: picDate // TODO: anything else to add?
        });

    const response = await fetch(picUri); // fetches the image
    const blob = await response.blob();   // converts to a blob
    var ref = firebase.storage().ref().child(picID); // ref to location for image of name "picID"
    ref.put(blob); // uploads image to Firebase storage
    return picID;

  } catch (err) {
    Alert.alert(err.message, "Firebase upload was unsuccessful!");
  }
}

/*
 * Adds a picture to current user's `pics` array.
 */
export async function addPicToUser(picID) {
  try {
    const currentUser = firebase.auth().currentUser;
    await db.collection("users")
      .doc(currentUser.uid)
      .update({
        pics: firebase.firestore.FieldValue.arrayUnion(picID)
      });
  } catch (err) {
    Alert.alert(err.message, "Please try again!");
  }
}