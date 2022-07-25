import { Link } from "react-router-dom";

export const Unauthorized = () => {
  return (
    <div>
      <h2>Sorry! you are not authorized to access this content.</h2>
      <p>
        <Link to="/dashboard">Go to the dashboard</Link>
      </p>
    </div>
  );
};
