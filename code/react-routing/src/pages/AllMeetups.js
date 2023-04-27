import React, { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-57aa9-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  } else {
    return (
      <React.Fragment>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </React.Fragment>
    )

  }
};

export default AllMeetupsPage;
