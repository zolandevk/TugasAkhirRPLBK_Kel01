import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import accessoriesImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "#ffffff",
    color: "#ffffff",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "100%"  }}>
            
          <center>
          <div className="judul">
             <h2 className="judul" style={{ color:"#000000", fontFamily:"Cursive", fontWeight: "bold" }}>TOKO ACCESSORIES</h2>
            <div className="gambar">
              <center>
             
                <img src={accessoriesImage} style={{ height: "288px"  }} />
             
              </center>
            </div>
          </div>
          </center>
          </div>
          <h2>
          </h2>
    </ThemeContext.Provider>
    </body>
  );
}
