import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import {Alert} from "react-native";

/*
 * Registers the user into the database.
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
 * Signs in the user.
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
    await db.collection('pictures')
      .doc(picID)
      .update({
        description: descrip
      })
    ;
  } catch (err) {
    Alert.alert(err.message, "Please try again!");
  }
}

/*
 *
 */
// export async function getUserPics(userID) {
//   try {
//     await
//   } catch (err) {

//   }
// }