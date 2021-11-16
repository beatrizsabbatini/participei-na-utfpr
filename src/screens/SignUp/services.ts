import firebase from "firebase";

export const signUp = (values: any, onSuccess: (uid: string, values: any) => void, onError: (error: any) => void) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((res: any) => {
      if (res){
        res.user.updateProfile({
          displayName: values.name
        })

        onSuccess(res.user.uid, values);
      }
    })
    .catch((error) => onError(error));
};
