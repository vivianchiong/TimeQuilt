import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import {Alert} from "react-native";
import moment from 'moment';
import * as ImagePicker from 'expo-image-picker';

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
 * Requests permissions to access the camera roll, launches the picker, and returns the result.
 */
export async function openImagePickerAsync() {
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  return await ImagePicker.launchImageLibraryAsync();
}

/*
 * Updates the description of a picture in the database.
 */
export async function updateDescriptionDB(picID, descrip) {
  try {
    const db = firebase.firestore();
    await db.collection("pictures")
      .doc(picID)
      .update({
        description: descrip
      });
  } catch (err) {
    Alert.alert(err.message, "Updating description of a picture was unsuccessful!");
  }
}

/*
 * Adds a picture as a document in the `pictures` collection in the database.
 * Called in the Home page.
 *
 * picUri: uri of the pic to add to db
 * dayNum: the day of the week of the pic; 0 is Monday, 6 is Sunday
 *         Uses ISO weeks: Mondays are the start of a week; First Monday of the year is week 1
 */
export async function addPicDB(picUri, dayNum) {
  try {
    let picMoment = moment().startOf('isoweek').add(dayNum, 'days');
    let picDate = (picMoment.month()+1) + '/' + picMoment.date() + '/' + picMoment.year(); // m-d-y format: march 12 2021 => 3/12/2021

    const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
    let picDay = weekdays[dayNum];

    const db = firebase.firestore();
    const { id: picID } = await db.collection("pictures")
      .add({
        uri: picUri,
        description: '',
        date: picDate,
        day: picDay,
        moment: picMoment.format()
        });

    const response = await fetch(picUri); // fetches the image
    const blob = await response.blob();   // converts to a blob
    const imageRef = firebase.storage().ref().child(picID); // ref to location for image of name "picID"
    imageRef.put(blob); // uploads image to Firebase storage
    return picID;

  } catch (err) {
    Alert.alert(err.message, "Firebase upload was unsuccessful!");
  }
}

/*
 * Adds a picture to current user's `pics` array in the database.
 */
export async function addPicToUser(picID) {
  try {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    await db.collection("users")
      .doc(currentUser.uid)
      .update({
        pics: firebase.firestore.FieldValue.arrayUnion(picID)
      });
  } catch (err) {
    Alert.alert(err.message, "Adding picture to user in database was unsuccessful!");
  }
}

/*
 * Deletes a picture from the database and storage.
 */
export async function deletePicDB(picID) {
  try {
    const db = firebase.firestore();
    await db.collection("pictures").doc(picID).delete();

    const imageRef = firebase.storage().ref().child(picID) // reference to the file to delete
    await imageRef.delete();
  } catch (err) {
    Alert.alert(err.message, "Deleting picture from database and storage was unsucessful!");
  }
}

/*
 * Deletes a picture from current user's `pics` array in the database.
 */
export async function deleteUserPic(picID) {
  try {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    await db.collection("users")
      .doc(currentUser.uid)
      .update({
        pics: firebase.firestore.FieldValue.arrayRemove(picID)
      });
  } catch (err) {
    Alert.alert(err.message, "Deleting picture from user in database was unsuccessful!");
  }
}

/*
 * Get current user's pics in the database.
 */
export async function getUserPics() {
  try {
    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser;

    if (currentUser !== null) {
      const userRef = db.collection("users").doc(currentUser.uid);
      const result = userRef.get().then((doc) => {
        if (doc.exists) {
          // console.log("User document data:", doc.data());
          return doc.get('pics');
        } else {
          console.log("No such user document!");
          return null;
        }
      }).catch((error) => {
        console.log("Error getting user document:", error);
      });
      return result;
    }

  } catch (err) {
    Alert.alert(err.message, "Getting current user's pics in the database was unsucessful!");
  }
}

/*
 * Get pic's data for create post if the moment matches.
 */
export async function getCreatePicData(picID, createPostMoment) {
  try {
    const db = firebase.firestore();
    let picRef = db.collection("pictures").doc(picID);
    let picResult = picRef.get().then((doc) => {

      if (doc.exists) {
        return {uri: doc.get('uri'), moment: doc.get('moment'), description: doc.get('description')};
      } else {
        console.log("No such pic document!");
        return null;
      }

    }).then((picData) => {

      if (picData !== null) {
        if (createPostMoment == picData.moment) {
          return { uri: picData.uri, description: picData.description };
        }
      }

      return null;
    }).catch((error) => {
        console.log("Error getting pic document:", error);
    });

    return picResult;
  } catch (err) {
    Alert.alert(err.message, "Getting create pic data was unsuccessful!");
  }
}

/*
 * Get current user's pic for create post page's day in the database.
 */
export async function getPicCreatePost(createPostMoment) {
  try {
    let pics = await getUserPics();
    var result = { id: null, uri: null, description: null };

    for (const picID of pics) {
      // returns picture given picID if the moment matches
      let picResult = await getCreatePicData(picID, createPostMoment)

      if (picResult !== null) {
        result.id = picID;
        result.uri = picResult.uri;
        result.description = picResult.description;
        return result;
      }
    }

    return result; // no pic for the create post page, or couldn't find one
  } catch (err) {
    Alert.alert(err.message, "Getting current user's pic for create post page's day in the database was unsucessful!");
  }
}

/*
 * Get pic's data for home.
 */
export async function getHomePicData(picID) {
  try {
    const db = firebase.firestore();
    let picRef = db.collection("pictures").doc(picID);
    let picResult = picRef.get().then((doc) => {

      if (doc.exists) {
        return {uri: doc.get('uri'), moment: doc.get('moment')};
      } else {
        console.log("No such pic document!");
        return null;
      }

    }).then((picData) => {

      if (picData !== null) {
        let input = moment(picData.moment);

        if (moment().isoWeek() === input.isoWeek()) {
          let picDayNum = input.isoWeekday() - 1;
          return {day: picDayNum, id: picID, uri: picData.uri};
        }
      }

      return null;
    }).catch((error) => {
        console.log("Error getting pic document:", error);
    });

    return picResult;
  } catch (err) {
    Alert.alert(err.message, "Getting home pic data was unsuccessful!");
  }
}

/*
 * Get current user's pics for the current week in the database.
 */
export async function getHomePicsDB() {
  try {
    var homePics = {"0": null, "1": null, "2": null, "3": null, "4": null, "5": null, "6": null}; // Monday - Sunday
    // returns pic IDs
    let pics = await getUserPics();

    for (const picID of pics) {
      // returns picture given picID
      let picResult = await getHomePicData(picID);
      if (picResult !== null) {
        homePics[picResult.day] = {id: picID, uri: picResult.uri};
      }
    }

    return homePics;
  } catch (err) {
    Alert.alert(err.message, "Geting current user's pics for the week in the database was unsucessful!");
  }
}