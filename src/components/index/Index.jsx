import "./index.scss";
const Index = () => {
  return (
    <div className="index">
      <form className="form">
        <legend>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </legend>
        <div className="inputItem">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="name" className="name" />
        </div>
        <div className="selectItem">
          <label htmlFor="sectors">Sectors</label>
          <select name="sectors" id="sectors" multiple>
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
            <input type="checkbox" id="agreeTerms" name="agreeTerms" />
            <label htmlFor="agreeTerms">Agree to terms</label>
          </div>
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
