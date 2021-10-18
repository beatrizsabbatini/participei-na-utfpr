import firebase from "firebase";

export const signUp = (values: any, onSuccess: () => void, onError: (error: any) => void) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then((res: any) => {
        res.user.updateProfile({
        displayName: values.name
      })
      createUserInDataBase(values, onSuccess);
    })
    .catch((error) => onError(error));
};

export const createUserInDataBase = (values: any, onSuccess: () => void) => {

  firebase
  .database()
  .ref(`/users`)
  .push({
    name: values.name,
    ra: values.ra,
    campus: values.campusId,
    image: null,
    email: values.email,
    postedActivities: [],
    savedActivities: [],
    group1Points: 0,
    group2Points: 0,
    group3Points: 0,
  })
  .then(() => onSuccess())
}