import { useParams, NavLink } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
      <NavLink to=".." relative="path">
        Back
      </NavLink>
    </>
  );
}

export default EventDetailPage;
