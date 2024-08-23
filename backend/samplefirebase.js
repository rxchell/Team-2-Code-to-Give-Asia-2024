import { collection, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "./configfirebase.js";

async function sample() {
  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().address}`);
  });
}
sample();
