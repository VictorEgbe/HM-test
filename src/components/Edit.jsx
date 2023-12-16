/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = ({ storedSectors, user }) => {
  const [sectors, setSectors] = useState([]);
  const [userName, setUserName] = useState(user.userName);
  const navigate = useNavigate();
  const URL = "http://techefreelance.pythonanywhere.com/sectors/";

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSectors(options);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      user_name: userName,
      sectors,
    };

    axios
      // .put(`http://localhost:8000/sectors/${user.userName}`, data)
      .put(`${URL}/${user.userName}`, data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/details");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="index">
      <form onSubmit={handleEdit} className="form">
        <legend>Please Make your changes</legend>
        <div className="inputItem">
          <label htmlFor="name">Name</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            type="text"
            id="name"
            placeholder="name"
            className="name"
          />
        </div>
        <div className="selectItem">
          <label htmlFor="sectors">Sectors</label>
          <select
            onChange={handleSelectChange}
            name="sectors"
            id="sectors"
            multiple
            required
          >
            {storedSectors?.map((storedSector) => (
              <optgroup label={storedSector.name} key={storedSector.id}>
                {storedSector.sectors.map((s) => (
                  <option key={s.id}>{s.name}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className="others">
          <Link className="link" to={"/details"}>
            go to details
          </Link>
          <button type="submit" disabled={!userName || sectors.length == 0}>
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
