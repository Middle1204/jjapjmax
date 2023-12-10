import { firebaseService } from "@libs/constructor-third-party";
import {
  Auth,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  UserCredential, // UserCredential을 import 추가
  User
} from "firebase/auth";

export class AuthService {
  private auth: Auth;

  constructor() {
    this.auth = getAuth(firebaseService.app);
    this.signWithGoogle = this.signWithGoogle.bind(this);

    setPersistence(this.auth, browserSessionPersistence);
  }

  public signWithGoogle(callback: (user: User) => void) {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(this.auth, googleProvider).then((userCredential: UserCredential) => {
      // UserCredential로 타입을 명시
      callback(userCredential.user);
    });
  }

  public onAuthStateChanged(callback: (user: User | null) => void) {
    this.auth.onAuthStateChanged(callback);
  }
}
