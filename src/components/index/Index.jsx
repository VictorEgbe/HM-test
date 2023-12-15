import "./index.scss";
import { useState } from "react";

const Index = () => {
  const [userName, setUserName] = useState("");
  const [sectors, setSectors] = useState([]);
  const [agree, setAgree] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_name: userName,
      sectors,
      agree,
    };

    console.log(data);
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
            <optgroup label="Manufacturing">
              <option>Construction and Materials</option>
              <option>Electronics and Optics</option>
            </optgroup>
            <optgroup label="Food and Beverage">
              <option>Bakery and confectionary products</option>
              <option>Beverages</option>
            </optgroup>
          </select>
        </div>
        <div className="others">
          <div className="terms">
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
            />
            <label htmlFor="agreeTerms">Agree to terms</label>
          </div>
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
