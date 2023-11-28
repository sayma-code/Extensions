const date = new Date();
const todays_date = localStorage.getItem("todaysDateForYoutubeScreenCounter");
if (todays_date === null) {
  localStorage.setItem("todaysDateForYoutubeScreenCounter", date);
} else {
    console.log(todays_date);
}

//localStorage.setItem('date', date);
