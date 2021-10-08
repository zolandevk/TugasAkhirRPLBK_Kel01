import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "10px",
  },
  line: {
    height: "10px",
    backgroundColor: "#ffffff",
  },
  link: {
    textDecoration: "none",
  },
}));

const themes = {
  light: {
    background: "#d4d4d4",
    color: "#000000",
  },
  dark: {
    background: "#a6a6a6",
    color: "#000000",
  },
};

const ThemeContext = createContext();

export default function Footer() {
  const classes = styles();
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background}}>
        <Toolbar position="sticky" className={classes.bar}>
          <div >
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "light", fontFamily:"Cursive" }}
              >
                 Beranda 
              </Link>
            </Button>

            <Button>
              <Link
                to="/accessories"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "light", fontFamily:"Cursive" }}
              >
                 Accessories 
              </Link>
            </Button>
            
            <Button>
              <Link
                to="/transaksi"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "light", fontFamily:"Cursive" }}
              >
                 Transaksi 
              </Link>
            </Button>
            <Button 
              style={{ color: valueTheme.color, fontWeight: "light", fontFamily:"Cursive" }}
              className="Button"
              // event handling
              onClick={() =>
                setValueTheme(
                  // tenary operator
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              Ganti Tema
            </Button>
          </div>
        </Toolbar>
        <div className={classes.line}></div>
      </div>
    </ThemeContext.Provider>
  );
}
