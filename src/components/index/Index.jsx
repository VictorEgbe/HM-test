import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [sectors, setSectors] = useState([]);
  const [agree, setAgree] = useState(null);
  const [storedSectors, setStoredSectors] = useState([]);
  const URL = "http://localhost:8000/sectors/";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setStoredSectors(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_name: userName,
      sectors,
      agree,
    };

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("userName", res.data);
        navigate("/details");
      })
      .catch((err) => console.log(err));
  };

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSectors(options);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  };

  return (
    <div className="index">
      <form onSubmit={handleSubmit} className="form">
        <legend>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </legend>
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
          <div className="terms">
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              required
            />
            <label htmlFor="agreeTerms">Agree to terms</label>
          </div>
          <button
            type="submit"
            disabled={!agree || !userName || sectors.length == 0}
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
