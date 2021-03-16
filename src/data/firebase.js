import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYRLNgjz2_V6ONXWyLd0_4XCzdiXqAFeY",
  authDomain: "ex3-produits-50982.firebaseapp.com",
  projectId: "ex3-produits-50982",
  storageBucket: "ex3-produits-50982.appspot.com",
  messagingSenderId: "512008231320",
  appId: "1:512008231320:web:50b441d852c1292f50b3ed",
  measurementId: "G-JZBFD069YE"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;