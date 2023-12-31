import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyCJvHtTsC6WlNtPKiMq2SmJ3gWsP8yQKAY',
  authDomain: 'resturant-5822c.firebaseapp.com',
  projectId: 'resturant-5822c',
  storageBucket: 'resturant-5822c.appspot.com',
  messagingSenderId: '296402790802',
  appId: '1:296402790802:web:c01923220378f531c4794b',
  measurementId: 'G-JVW4FL1SD4',
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
