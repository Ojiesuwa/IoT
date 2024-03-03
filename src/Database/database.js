const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");

const serviceAccount = require("../xogamedev-a6501-firebase-adminsdk-h6515-7ef3ee200d.json");
const { response } = require("express");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

function register(userData) {
  return new Promise(async (resolve, reject) => {
    // Add a new document with a generated id.
    const res = await db.collection("Accounts").add(userData);
    resolve(res.id);
    console.log(res.id);
  });
}

function login(userData) {
  return new Promise(async (resolve, reject) => {
    const usersRef = db.collection("Accounts");
    let userInformations = await usersRef
      .where("email", "==", userData.email)
      .get();

    let flag = true;
    userInformations.forEach((info) => {
      flag = false;
      if (info.data().password === userData.password) {
        resolve(info.id);
        return;
      }
    });

    if (!flag) {
      reject("Unregistered email");
    }
    reject("Incorrect Password");
    return;
  });
}

function updateField(collection, document, fieldName, value) {
  return new Promise(async (resolve, reject) => {
    const ref = db.collection(collection).doc(document);
    let data = {};
    data[fieldName] = value;
    const res = await ref.update(data);
    resolve(res);
  });
}

function getField(collection, document, fieldName) {
  return new Promise(async (resolve, reject) => {
    const cityRef = db.collection(collection).doc(document);
    const doc = await cityRef.get();
    if (!doc.exists) {
      // console.log("No such document!");
      reject("No File");
    } else {
      // console.log("Document data:", doc.data());
    }
    let data = doc.data();
    let info = data[fieldName];
    resolve(info);
  });
}

module.exports = { register, login, updateField, getField };
