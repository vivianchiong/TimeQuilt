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
    db.collection("pictures")
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
    const userRef = db.collection("users").doc(currentUser.uid);

    const pics = await userRef.get().then((doc) => {
      if (doc.exists) {
        console.log("User document data:", doc.data());
        return doc.data().pics;
      } else {
        console.log("No such user document!");
      }
    }).catch((error) => {
      console.log("Error getting user document:", error);
    });
  } catch {
    Alert.alert(err.message, "Getting current user's pic for this day in the database was unsucessful!");
  }
}

/*
 * Get current user's pic for create post page's day in the database.
 */
export async function getPicCreatePost(createPostMoment) {
  try {
    const db = firebase.firestore();
    const pics = await getUserPics();

    pics.forEach(picID => {

      const picRef = db.collection("pictures").doc(picID);
      const picMoment = await picRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Pic document data:", doc.data());
          return doc.data().moment;
        } else {
          console.log("No such pic document!");
        }
      }).catch((error) => {
          console.log("Error getting pic document:", error);
      });

      if (createPostMoment === picMoment) {
        return picID;
      }

    })

  } catch (err) {
    Alert.alert(err.message, "Getting current user's pic for create post page's day in the database was unsucessful!");
  }
}

/*
 * Get current user's pics for the current week in the database.
 */
export async function getHomePicsDB() {
  try {
    const db = firebase.firestore();
    const pics = await getUserPics();

    let picsDict = {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''}; // Monday - Sunday

    pics.forEach(picID => {

      const picRef = db.collection("pictures").doc(picID);
      const picMoment = await picRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Pic document data:", doc.data());
          return doc.data().moment;
        } else {
          console.log("No such pic document!");
        }
      }).catch((error) => {
          console.log("Error getting pic document:", error);
      });

      if (moment().isoWeek() === picMoment.isoWeek()) {
        let picDayNum = picMoment.isoWeekday() - 1;
        picsDict[picDayNum] = picID;
      }

    })

    return picsDict;

  } catch (err) {
    Alert.alert(err.message, "Geting current user's pics for the week in the database was unsucessful!");
  }
}


// export async function deleteUserPic(picID) {
//   try {
//     const db = firebase.firestore();
//     const currentUser = firebase.auth().currentUser;

//     await db.collection("users")
//       .doc(currentUser.uid)
//       .update({
//         pics: firebase.firestore.FieldValue.arrayRemove(picID)
//       });
//   } catch (err) {
//     Alert.alert(err.message, "Deleting picture from user in database was unsuccessful!");
//   }
// }

// /*
//  * Get current user's pics for the week in the database.
//  */
// export async function getHomePicsDB() {
//   try {
//     const db = firebase.firestore();
//     const currentUser = firebase.auth().currentUser;
//     const userRef = db.collection("users").doc(currentUser.uid);

//     const pics = await userRef.get().then((doc) => {
//       if (doc.exists) {
//         console.log("User document data:", doc.data());
//         return doc.data().pics;
//       } else {
//         console.log("No such user document!");
//       }
//     }).catch((error) => {
//         console.log("Error getting user document:", error);
//     });

//     const dayNums = [0, 1, 2, 3, 4, 5, 6];
//     let dayMoments = [];
//     dayNums.forEach(dayNum => {
//       let day = moment().startOf('isoweek').add(dayNum, 'days');
//       dayMoments.append(day.format());
//     });

//     let picsDict = {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: ''}; // Monday - Sunday

//     pics.forEach(picID => {
//       dayMoments.forEach(dayMoment => {

//         const picRef = db.collection("pictures").doc(picID);
//         const picMoment = await picRef.get().then((doc) => {
//           if (doc.exists) {
//             console.log("Pic document data:", doc.data());
//             return doc.data().moment;
//           } else {
//             console.log("No such pic document!");
//           }
//         }).catch((error) => {
//             console.log("Error getting pic document:", error);
//         });

//         if (picMoment === dayMoment) {
//           let picDayNum = picMoment.isoWeekday() - 1; // isoWeekday returns 1 for Monday, 7 for Sunday, we want 0 for Monday 6 for Sunday
//           picsDict[picDayNum] = picID;
//         }

//       })
//     })

//     return picsDict;

//   } catch (err) {
//     Alert.alert(err.message, "Geting current user's pics for the week in the database was unsucessful!");
//   }
// }