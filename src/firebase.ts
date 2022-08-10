import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { Result } from "./Pages/Test/Types/Result";
import { Question } from "./Pages/Test/Types/Question";

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const db = getFirestore();

export async function logout() {
  const auth = getAuth(app);
  return signOut(auth);
}

export function getUser() {
  const auth = getAuth(app);
  return auth.currentUser;
}

export function isInit() {
  const auth = getAuth(app);
  return new Promise((resolve) => {
    auth.onAuthStateChanged(resolve);
  });
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const auth = getAuth(app);
    console.log(auth);
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
}

export async function createUserWithEmail(
  name: string,
  email: string,
  password: string
) {
  try {
    const auth = getAuth(app);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    updateProfile(user, { displayName: name });

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    await signInWithEmail(email, password);
  } catch (err) {
    console.error(err);
  }
}

export async function openGoogleSignIn() {
  try {
    const auth = getAuth(app);
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
}

export async function sendPasswordReset(email: string) {
  try {
    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
}

export async function saveResult(result: Result) {
  const auth = getAuth(app);
  const user = auth.currentUser!;
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  if (!docs.empty) {
    return addDoc(collection(db, `users/${docs.docs[0].id}/results`), result);
  }
}

export async function getResults(): Promise<Result | undefined> {
  const auth = getAuth(app);
  const user = auth.currentUser!;
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  if (!docs.empty) {
    //@ts-ignore
    return (
      await getDocs(collection(db, `users/${docs.docs[0].id}/results`))
    ).docs[0].data();
  }
}

export async function uploadQuestions(
  questions: Question[],
  lang: "english" | "arabic"
) {
  return setDoc(doc(db, `tests/${lang}`), { questions });
}

export async function getQuestions(
  lang: "english" | "arabic"
): Promise<{ questions: Question[] }> {
  //@ts-ignore
  return (await getDoc(doc(db, `tests/${lang}`))).data();
}
