import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import writeXlsxFile from "write-excel-file";
export default class databaseAccess {
  metadataKey = "tP8pFfOA8QMPfaxMgNze";
  constructor() {
    this.firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_KEY,
      authDomain: "pass-lighter.firebaseapp.com",
      projectId: "pass-lighter",
      storageBucket: "pass-lighter.appspot.com",
      messagingSenderId: "107893130111",
      appId: "1:107893130111:web:592bc2cf586e158cb7104a",
      measurementId: "G-K91YL2964Z",
    };
    this.app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async getAmountOfLighters() {
    const querySnapshot = await getDocs(collection(this.db, "lighters"));
    return querySnapshot._snapshot.docChanges.length;
  }

  saveLog() {}

  async getLighters() {
    // const lightersCol = collection(this.db, "lighters");
    // const lightersSnapShot = await getDocs(lightersCol);
    // const lighterList = lightersSnapShot.docs.map((doc) => doc.data());

    const querySnapshot = await getDocs(collection(this.db, "lighters"));
    const lighters = [];
    querySnapshot.forEach((doc) => {
      lighters.push(doc.data());
    });

    return lighters;
  }

  async getOneLighter(id) {
    const docRef = doc(this.db, "lighters", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }

  async getMetadata() {
    const docRef = doc(this.db, "metadata", this.metadataKey);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }

  async createLighter(userId) {
    await setDoc(doc(this.db, "lighters", userId), {
      nickname: "",
      locations: [],
      messages: [],
      id: userId,
      log: [],
    });
  }

  async giveNickname(id, nickname) {
    const lighterRef = doc(this.db, "lighters", id);
    setDoc(lighterRef, { nickname: nickname }, { merge: true });
  }

  // async postMessage(id, message, nickName) {
  //   const docRef = doc(this.db, "lighters", id);
  //   const docSnap = await getDoc(docRef);
  //   let messages = [];
  //   let date = new Date();
  //   let stringDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  //   if (docSnap.exists()) {
  //     messages = docSnap.data().messages;
  //     messages.push({
  //       nickname: nickName,
  //       message: message,
  //       date: stringDate,
  //     });
  //   } else {
  //     console.log("No such document!");
  //   }
  //   const lighterRef = doc(this.db, "lighters", id);
  //   await setDoc(lighterRef, { messages: messages }, { merge: true });
  // }

  getDb() {
    return this.db;
  }

  async postMessage(id, message, nickName) {
    let date = new Date();
    let stringDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const lightersRef = doc(this.db, "lighters", id);
    await updateDoc(lightersRef, {
      messages: arrayUnion({
        nickname: nickName,
        message: message,
        date: stringDate,
      }),
    });
  }

  async submitLog(id, nickname, how, when, where, message, distanceTraveled) {
    const lightersRef = doc(this.db, "lighters", id);
    let stringDate = `${when.getDate()}/${when.getMonth()}/${when.getFullYear()}`;

    console.log(nickname, how, when, where, message);
    await updateDoc(lightersRef, {
      log: arrayUnion({
        nickname: nickname,
        how: how,
        when: stringDate,
        where: where,
        message: message
      },
      ),
      distanceTraveled : distanceTraveled,
    });
  }

  async getAllFoundFighters() {
    const lighters = await this.getLighters();

    lighters.forEach((lighter) => {
      try{
      if (lighter.log.length > 0 && lighter.messages.length > 0) {
        console.log(lighter);
      }}catch{

      }
    });
  }

  // async randomCodeGenerator(number) {
  //   let objects = [];
  //   for (let i = 0; i < number; i++) {
  //     let code = window
  //       .btoa(
  //         String.fromCharCode(
  //           ...window.crypto.getRandomValues(new Uint8Array(5 * 2))
  //         )
  //       )
  //       .replace(/[+/]/g, "")
  //       .substring(0, 5)
  //       .toUpperCase();
  //     let repeated = false;
  //     objects.forEach(obj => {
  //       if (obj.id === code) {
  //         repeated = true;
  //         i++;
  //         console.log('repeated!!!!', obj.id, code);
  //       }
  //     })

  //     if (!repeated) {
  //       objects.push({ id: code });
  //     }
  //   }
  //   const schema = [
  //     {
  //       column: "id",
  //       type: String,
  //       value: (lighter) => lighter.id,
  //     },
  //   ];
  //   await writeXlsxFile(objects, {
  //     schema,
  //     fileName: "./file.xlsx",
  //   });
  //   objects.forEach(o => {
  //     this.createLighter(o.id);
  //   })
  // }
}
