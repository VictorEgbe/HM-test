import "./details.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const navigate = useNavigate();
  const [userSectors, setUserSectors] = useState([]);
  const userName = JSON.parse(localStorage.getItem("user")).userName;
  const URL = "http://techefreelance.pythonanywhere.com/sectors/";

  if (!userName) {
    navigate("/");
  }

  useEffect(() => {
    axios
      // .get(`http://localhost:8000/sectors/${userName}`)
      .get(`${URL}/${userName}`)
      .then((res) => setUserSectors(res.data))

      .catch((err) => console.log(err));
  }, [userName]);

  return (
    <div className="details">
      <div className="container">
        <div className="top">
          <h1>{userName}</h1>
          <Link className="link" to={"/"}>
            Edit
          </Link>
        </div>
        <div className="bottom">
          <h1>Your Sectors</h1>
          <div className="sectors">
            {userSectors?.map((h) => (
              <section key={h.id}>
                <h2>{h.name}</h2>
                <ul>
                  {h?.sectors.map((s) => (
                    <li key={s.id}>{s.name}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
