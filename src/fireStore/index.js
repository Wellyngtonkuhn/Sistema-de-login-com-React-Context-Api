import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import env from "react-dotenv";

const firebaseConfig = {
  apiKey: env.REACT_APP_API_KEY,
  authDomain: env.REACT_APP_AUTHDOMAIN,
  projectId: env.REACT_APP_PROJECTID,
  storageBucket: env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_MESSAGINSENDERID,
  appId: env.REACT_APP_APPID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
