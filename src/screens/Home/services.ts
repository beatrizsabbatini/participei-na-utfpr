import { IUserData } from "../../store/modules/LoggedUser/userData/types";
import { IActivity } from "../../types";

export async function getActivitiesByQuery(
  queryString: string, 
  onSuccess: (activities: IActivity[]) => void,
  activities: IActivity[]
  ){
    const filteredActivities = activities.filter(activity => {
      const activityTitleLowercase =  activity.title.toLowerCase();
      if (activityTitleLowercase.includes(queryString)) return activity;
    })

    onSuccess(filteredActivities);
}

export async function getAllActivities(
  activitiesRef: any,
  onSuccess: (activities: IActivity[]) => void,
  onError: (error: any) => void,
  ){
    await activitiesRef.on('value', (snapshot: any) => {
      const snapshotValue = snapshot.val();
      if (snapshotValue){
        const activitiesArray: IActivity[] = Object.values(snapshotValue);
        onSuccess(activitiesArray.reverse());
      } else {
        onSuccess([]);
      }
    }, (error: any) => {
      onError(error);
    });
}

export async function getUserData(
  usersRef: any,
  userEmail: string, 
  onSuccess: (userData: IUserData) => void,
  onError: (error: any) => void
  ){
  await usersRef.orderByChild("email").equalTo(userEmail).once("value", function (snapshot: any) {
    snapshot.forEach((childSnapshot: any) => {
      const userData = childSnapshot.val();
      onSuccess(userData);
    });
  }).catch((error: any) => {
  onError(error)
  })
}