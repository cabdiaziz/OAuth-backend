import usersCard from "../models/usersCard.js";

//*call this function in the server.
export const serchCardExpireDates = async () => {
  const allExpDates = await usersCard
    .find()
    .select("expDate username cardName isActive -_id");
  console.log("allExpDates == ", allExpDates);

  //day difernce
  for (let i = 0; i < allExpDates.length; i++) {
    const differenceMonth = date_diff(
      Date.now(),
      allExpDates[i].expDate,
      "month"
    );
    console.log("diff Month : ", differenceMonth);
    //notification function
    sendNotification(
      differenceMonth,
      allExpDates[i].username,
      allExpDates[i].cardName,
      allExpDates[i].isActive,
      differenceMonth
    );
  }
};

const sendNotification = async (
  diff_month,
  username,
  cardname,
  isActive,
  month,
  req,
  res
) => {
  //* we display the notification in the console.
  if (diff_month <= 3 && diff_month >= 0) {
    return console.log(
      `Notification : Warning ${username} is ${
        isActive ? "active" : "blocked"
      } and ${cardname} card date is going to expire soon only left ${month}-month to expire..!`
    );
  } else if (diff_month < 0) {
    const newStatus = await usersCard.find({ username: username });
    console.log("isActive =", newStatus[0].isActive);
    if (newStatus[0].isActive) {
      //* updating the user status
      newStatus[0].isActive = false;
      newStatus[0]
        .save()
        .then((result) => {
          console.log("blocked user =", result);
          return { msg: "user blocked", result };
        })
        .catch((err) => {
          console.log("isActive =", err.message);
          return err.message;
        });
    }
    return console.log(
      `Notification : Warning  ${username} is ${
        isActive ? "active" : "blocked"
      } because ${cardname} card is expired before ${month}-month`
    );
  } else {
    console.log("Notifications is empty");
  }
};
const date_diff = (d1, d2, get_item) => {
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  var Difference_In_Time = date1.getTime() - date2.getTime();
  switch (get_item) {
    case "month":
      return Math.round(Difference_In_Time / (1000 * 3600 * 24 * 30));
    case "day":
      return Math.round(Difference_In_Time / (1000 * 3600 * 24));
    case "hour":
      return Math.round(Difference_In_Time / (1000 * 3600));
    case "minute":
      return Math.round(Difference_In_Time / (1000 * 60));
    case "second":
      return Math.round(Difference_In_Time / 1000);
    default:
      break;
  }
};
export const dateFormatter = (date) => {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
