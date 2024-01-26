import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "could not fetch data!" };
    throw new Response(JSON.stringify({ message: "could not fetch events" }), {
      status: 500,
    });

    // return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
