import React from "react";
import info from "./info";
import "./header.css";

class ModalAdvanced extends React.Component {
  state = {
    info,
    search: false,
  };
  filter = {};
  render() {
    const getData = ({ target: { value, name } }) => {
      this.filter[name] = value;
      this.setState({ [name]: value });
    };
    const search = () => {
      let dataInfo = [...info];
      Object.entries(this.filter).forEach(([key, val]) => {
        dataInfo = dataInfo.filter((data) => {
          return `${data[key]}`?.toLowerCase().includes(val?.toLowerCase());
        });
        this.setState({ info: dataInfo });
      });
    };

    const cancel = () => {
      this.filter = {};
      this.setState({ info: info });
    };

    // const show = () => {};
    return (
      <div className=" modal-adv">
        <div className="container inputs-wrap">
          <div className="address">
            <h3 className="input-title">Address</h3>
            <div className="adress-input">
              <input
                onChange={getData}
                name="country"
                type="text"
                placeholder="country"
              />
              <input
                onChange={getData}
                name="ragion"
                type="text"
                placeholder="ragion"
              />
              <input
                onChange={getData}
                name="city"
                type="text"
                placeholder="city"
              />
              <input
                onChange={getData}
                name="zip"
                type="text"
                placeholder="ZIP code"
              />
            </div>
          </div>

          <h3 className="input-title">Apartment info</h3>
          <div className="apartment-info">
            <input
              onChange={getData}
              name="rooms"
              type="text"
              placeholder="rooms"
            />
          </div>
          <div className="prices">
            <h3 className="input-title">Price</h3>
            <input
              className="prices-input"
              onChange={getData}
              name="min"
              type="text"
              placeholder="min"
            />
            <input
              className="prices-input"
              onChange={getData}
              name="max"
              type="text"
              placeholder="max"
            />
          </div>
          <div className="inputs-btn">
            <button className="btn input-cancel" onClick={cancel}>
              Cancel
            </button>
            <button className="btn input-search" onClick={search}>
              Submit
            </button>
          </div>
        </div>

        <div className=" finded">
          <table>
            <thead>
              <tr>
                <th>Zip</th>
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
                      <td>{zip}</td>
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
