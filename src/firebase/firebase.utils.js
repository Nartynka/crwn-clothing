import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD5vv_FsHwHScRdm-SDioUOwq-by5zrFpk',
	authDomain: 'crwn-clothing-420.firebaseapp.com',
	projectId: 'crwn-clothing-420',
	storageBucket: 'crwn-clothing-420.appspot.com',
	messagingSenderId: '163505504945',
	appId: '1:163505504945:web:d30b3e727e925101111890'
};

export const createUserDocument = async (user, additionalData) => {
	if (!user) return;

	const userRef = firestore.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = user;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (e) {
			console.log('error while creating user document', e);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
