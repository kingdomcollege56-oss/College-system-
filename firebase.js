<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcL_PjNww-ea6d33irNgWbn1EsBq4acTA",
  authDomain: "collegeportal-app.firebaseapp.com",
  databaseURL: "https://collegeportal-app-default-rtdb.firebaseio.com",
  projectId: "collegeportal-app",
  storageBucket: "collegeportal-app.firebasestorage.app",
  messagingSenderId: "266762331631",
  appId: "1:266762331631:web:66ddfbde53d33086ac421a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

</script>
