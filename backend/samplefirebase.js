import { firestore } from "./configfirebase.js";

async function sample() {
  const querySnapshot = await firestore.collection('users').get();
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().address}`);
  });
}
sample();
