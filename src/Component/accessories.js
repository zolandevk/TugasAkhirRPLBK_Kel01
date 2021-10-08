import React, { Component, useState, createContext, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
// import { Modal, Button } from "antd";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export default class accessories extends Component {
    constructor(props) {
		super(props);
		this.state = {
			visible: false,
			setOpen: false,
			recipe: [],
			
		};
		// handleOpen = () => setOpen(true);
		// handleClose = () => setOpen(false);
	}

	handleDetail = () => {
        this.setState({
		visible: true,
		
		});
		console.log(this.setState);
    };

	handleButton = (steps) => {
		// alert(steps);
	};
	
	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:8000/data",
			headers: {
				accept: "*/*",
			},
		})
		.then((data) => {
			console.log(data.data);
			this.setState({
				recipe: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}
	
	render() {
		return (
			<div style={{ backgroundColor: "#ffffff", fontFamily:"Cursive" }}>
        <div style={{ marginTop: 20 }}>
      <center>
      
            </center>
        <div className="marquee" >
            <center>
              <h2> Set Accessories</h2>
        </center>
        </div>
				<Grid container
                    md={11}
                    spacing={4}
                    style={{ margin:"auto", backgroundColor: "#d4d4d4" }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="strech"
					
                >
				{/* pengolahan array */}
					{this.state.recipe.map((results, index) => {
						return (
							<Grid item key={results.name} md={3}>
								<Card >
									<CardActionArea >
									
                                        <CardMedia
                                            style={{
											height: "150px",
														margin: "auto",
														paddingTop: "5%",
                                                        // margin: "1px",
                                                        // padding: "auto",
                                                        borderRadius: "8px",
                                                        // height: "80px",
                                                        // width: "80px"
                                                    }}
                                                    component="img"
                                                    image={results.image}
                                                />
                                            
											<Typography style={{ fontWeight: "bold" }}>
												<br/>{results.name}
											</Typography>
											<Typography>
												 : {results.ingredients}
											</Typography>
											
												<AccessoriesDetail name={results.name} ingredients={results.ingredients} steps={results.steps} image={results.image}></AccessoriesDetail>
									
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</Grid>                
                <br/><br/><br/><br/>
			</div>
      </div>
            
		)
	}
}
function AccessoriesDetail(props){
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const {name, ingredients, steps, image} = props;

var accDetailContext = createContext(null);

useEffect(() => {
	document.title = `${name}`;
	console.log(name);
});

return (
	<>
	<accDetailContext.Provider key={name}>
	<Button variant="primary" onClick={handleShow}>
	Detail
	</Button>

	<Modal show={show} OnHide={handleClose}>
	<Modal.Header closeButton>
	<Modal.Title>{name}</Modal.Title>
	</Modal.Header>
	<Modal.Body>
            <img src={image} ></img>
            <p>name : {name}</p>
            <p>keterangan : {steps}</p>
            <p>harga : <br /> {ingredients}</p>

            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
	</Modal>
	</accDetailContext.Provider>
	</>

)
}
// function Poto(props) {
// 	return (
// 	  <div>
// 		<img src={props.image} style={{border:"1px solid #03bfcb", borderRadius: "5%", padding: "0px", width: "50%", height: "10%", margin: "20px"  }} />
// 		<br />
// 	  </div>
// 	);
//   }
  
