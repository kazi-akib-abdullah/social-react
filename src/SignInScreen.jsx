import { authentication } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const SignInScreen = ()=>{
    const logout = () => {
      authentication.signOut();
    }
    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
          console.log(re);
        })
        .catch((err)=>{
          console.log(err)
        })
        authentication.onAuthStateChanged( async (user)=>{
          if(user){
            let token = await user.getIdToken();
            console.log(token);
          }
        })
      }
    return (
        <div className="App">
            <button onClick={signInWithGoogle}>
              Click me
            </button>
            <button onClick={logout}>Logout</button>
        </div>
        
      );
}

export default SignInScreen;