import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/contactus");
  };

  return (
    <>
      <h1 className={classes.heading}>This is home page</h1>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default Home;
