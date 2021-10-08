import React, { Fragment } from "react";

class Transaksi extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      Accessories: [
        ["Cincin Set A", 40000],
        ["Cincin Set B", 50000],
        ["Cincin Set C", 40000],
        ["Cincin Set D", 50000],
        ["Gelang Set A", 40000],
        ["Gelang Set B", 50000],
        ["Gelang Set C", 40000],
        ["Gelang Set D", 50000],
        ["Kalung Set A", 40000],
        ["Kalung Set B", 50000],
        ["Kalung Set C", 40000],
        ["Kalung Set D", 50000],
      ],
      
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { produk1, produk2} = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const {Accessories, totalTagihan } = this.state;
    return (
      <div style={{ backgroundColor: "#ffffff", height: "470px"   }}>
        <div className="titleWrapper">
          <center>
            <p className="judul" style={{ color:"#000000", fontFamily:"Cursive", fontWeight: "light" }}>Transaksi</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label >Accessories</label>
            </center>
            <div>
            </div>
            <center>
            <label >pilihan</label>
            </center>
            <div>
              <center>
              <input
              style={{
                background: "#d4d4d4",
                color: "#4B0082",
                margin: "auto",
                height: "40px",
                border: "#9254de",
                fontSize: "15px"
              }}
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="accessories">
                <br />
                <center>
                <label >Pilih Model    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#d4d4d4",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">Accessories</option>
                  <Fragment>
                    {Accessories.map((accessories) => {
                      return <option value={accessories[1]}>{accessories[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                
                <br />
              </div>
              <h3
                style={{
                  color: "#000000",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"Cursive"
                }}
              >
                Total Harga {totalTagihan} 
              </h3>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Transaksi;
