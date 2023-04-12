import React from "react";
import info from "./info";
import "./header.css";

class ModalAdvanced extends React.Component {
  state = {
    info,
    ragion: "",
    city: "",
    rooms: "",
  };
  render() {
    const getInput = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };

    const search = () => {
      let res = info.filter(
        (data) =>
          data.ragion.toLowerCase() == this.state.ragion.toLowerCase() &&
          data.rooms == this.state.rooms
        //   data.city.toLowerCase() == this.state.city.toLowerCase()
      );
      this.setState({ info: res });
    };

    // const show = () => {};
    return (
      <div className=" modal-adv">
        <div className="container inputs-wrap">
          <div className="address">
            <h3 className="input-title">Address</h3>
            <div className="adress-input">
             *<input
                onChange={getInput}
                name="ragion"
                type="text"
                placeholder="ragion"
              />
              <input
                onChange={getInput}
                disabled
                name="city"
                type="text"
                placeholder="city"
              />
              <input
                onChange={getInput}
                disabled
                name="zip"
                type="text"
                placeholder="ZIP code"
              />
            </div>
          </div>

          <h3 className="input-title">Apartment info</h3>
          <div className="apartment-info">
           *<input
              onChange={getInput}
              name="rooms"
              type="text"
              placeholder="rooms"
            />
          </div>
          <div className="prices">
            <h3 className="input-title">Price</h3>
            <input
              className="prices-input"
              onChange={getInput}
              name="zip"
              type="text"
              placeholder="min"
            />
            <input
              className="prices-input"
              onChange={getInput}
              name="zip"
              type="text"
              placeholder="max"
            />
          </div>
          <div className="inputs-btn">
            <button className="btn input-cancel">Cancel</button>
            <button className="btn input-search" onClick={search}>
              Submit
            </button>
          </div>
        </div>

        <div className="container finded">
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Ragion</th>
                <th>City</th>
                <th>Rooms</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.info.map(
                ({ country, ragion, city, zip, rooms, price }) => {
                  return (
                    <tr>
                      <td>{country}</td>
                      <td>{ragion}</td>
                      <td>{city}</td>
                      <td>{rooms}</td>
                      <td>{price}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ModalAdvanced;
