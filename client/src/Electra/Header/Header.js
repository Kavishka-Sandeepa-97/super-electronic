import "./Header.css";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginModal from "../Login/loginModal";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Place } from "@material-ui/icons";
import { FormGroup, FormControlLabel } from "@material-ui/core";
import { LocalShipping } from "@material-ui/icons";
import UserContext from "../../Context/UserContext";
import { Person } from "@material-ui/icons";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Categoties from "../Categories/Categories";
import logo from "./logo.JPG";
//Style
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 5px",
    },
}))(Badge);

const Header = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const style = { color: "white", fontSize: 19, marginRight: "2%" };
    //current user by context
    const userContext = useContext(UserContext);
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="header">
            <div className="OverHeader">
                <FormControlLabel
                    control={
                        <img
                            alt="logo"
                            src={logo}
                            style={{ width: "70px", height: "70px" }}
                        />
                    }
                    style={{ color: "black", fontWeight: "bold" }}
                    label={
                        <span style={{ fontWeight: "bold", fontSize: "40px" }}>
                            Super Electronic
                        </span>
                    }
                />
                <div>
                    Hundreds of products with free delivery to you within 48 hours
                    <LocalShipping style={{ fontSize: "33px" }} />
                </div>
            </div>


            <div className="root" style={{}}>
                <div>

                    <LoginModal open={open} setOpen={setOpen} />
                    <FormGroup row style={{}}>
                        {/*Back to the homepage*/}
                        <FormControlLabel
                            control={<KeyboardArrowRightIcon style={{ fill: "yellow" }} />}
                            style={{ color: "yellow", fontSize: 19 }}
                            label="Homepage"
                            onClick={() => history.push("/")}
                        />
                        {/* Categories */}

                        {/* <FormControlLabel 
                            control={ <Categoties/>}
                            style={{ color: 'white', fontSize: 19, marginLeft:'10%' }}
                        /> */}
                        {/* Cart */}

                        <FormControlLabel
                            control={
                                <IconButton aria-label="cart">
                                    <StyledBadge
                                        badgeContent={+userContext.user.userCartNumber}
                                        color="secondary"
                                    >
                                        <ShoppingCartIcon
                                            style={{ fontSize: "35px", fill: "yellow" }}
                                        />
                                    </StyledBadge>
                                </IconButton>
                            }
                            label={<div className="cart">Cart</div>}
                            onClick={() => history.push("/Cart")}
                            style={{ color: "white", fontSize: 19 }}
                            labelPlacement="start"
                        />
                        {/* Login */}

                        <FormControlLabel
                            control={<Person style={{ fill: "yellow" }} />}
                            label={userContext.user.userName}
                            onClick={handleOpen}
                            style={style}

                        />
                        {/* Branches */}

                        <FormControlLabel
                            control={<Place style={{ fill: "yellow" }} />}
                            label="About Us"
                            onClick={() => history.push("/Branches")}
                            style={style}

                        />
                    </FormGroup>

                </div>

                <div style={{ color: "yellow", margin: 0,display:"flex",gap:20,marginLeft:15}}>
                    <h6 >Electronic &nbsp;| </h6> 
                    <h6 >Home and Living  &nbsp;|  </h6>
                    <h6 >Cellular Accessories  &nbsp;| </h6>
                    <h6 >Lighting  &nbsp;| </h6>
                    <h6 >Automotive  &nbsp;| </h6>
                    <h6 >Computer Accessories</h6>
                </div>




            </div>






        </div>
    );
};

export default Header;
