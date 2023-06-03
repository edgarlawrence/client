import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate, Link } from "react-router-dom";
import ShoppingImagesCart from "../Assets/shopping images.jpg";
import NotificationFlat from "../Assets/notification flat.png";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

const drawerList = [
  {
    id: 0,
    name: "Profile",
    icon: <Avatar sx={{ width: "2rem", height: "2rem" }} />,
  },
  {
    id: 1,
    name: "Settings",
    icon: <Settings sx={{ width: "2rem", height: "2rem" }} />,
  },
  {
    id: 2,
    name: "Logout",
    icon: <Logout sx={{ width: "2rem", height: "2rem" }} />,
  },
];

interface Props {
  cartNumber?: any;
}

const Navbar: React.FC<Props> = ({ cartNumber }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [bellEl, setBellEl] = React.useState<null | HTMLElement>(null);
  const [cartEl, setCartEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const bell = Boolean(bellEl);
  const cart = Boolean(cartEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBellClick = (event: React.MouseEvent<HTMLElement>) => {
    setBellEl(event.currentTarget);
  };

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    setCartEl(event.currentTarget);
  };

  const handleBellClose = () => {
    setBellEl(null);
  };

  const handleCartClose = () => {
    setCartEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [drawers, setDrawers] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawers((prevState) => !prevState);
  };

  function handleProfileClick() {
    navigate(`/profile`);
  }

  function handleSettingsClick() {
    navigate(`/settings`);
  }

  function handleLogoutClick() {
    navigate(`/signin`);
  }

  return (
    <AppBar position="static">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div">
              Toko Online
            </Typography>
          </Link>
        </Box>
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search Here"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "30px",
                  border: "transparent",
                }}
              />
            )}
          />
        </Box>
        <Box
          className="dropdowns"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className="carts-dropdown">
            <Tooltip title="Notifications">
              <IconButton
                onClick={handleCartClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={cart ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={cart ? "true" : undefined}
              >
                <ShoppingCartCheckoutIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
            <Typography
              component="span"
              sx={{
                fontSize: "13px",
                border: 1,
                p: "3px",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                position: "relative",
                right: "18px",
                bottom: "14px",
              }}
            >
              {" "}
              {cartNumber}{" "}
            </Typography>
            <Menu
              anchorEl={cartEl}
              id="account-menu"
              open={cart}
              onClose={handleCartClose}
              onClick={handleCartClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Box className="no-carts" sx={{ p: 1 }}>
                  <Box
                    component="img"
                    src={ShoppingImagesCart}
                    alt={ShoppingImagesCart}
                    sx={{
                      width: "20rem",
                    }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: 700,
                      color: "grey",
                    }}
                  >
                    {" "}
                    There is No Cart
                  </p>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Box className="bell-dropdown">
            <Tooltip title="Notifications">
              <IconButton
                onClick={handleBellClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={bell ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={bell ? "true" : undefined}
              >
                <NotificationsNoneIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Tooltip>
            <Typography
              component="span"
              sx={{
                fontSize: "13px",
                border: 1,
                p: "3px",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                position: "relative",
                right: "18px",
                bottom: "14px",
              }}
            >
              {" "}
              {cartNumber}{" "}
            </Typography>
            <Menu
              anchorEl={bellEl}
              id="account-menu"
              open={bell}
              onClose={handleBellClose}
              onClick={handleBellClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Box
                className="no-notif"
                sx={{
                  px: 5,
                  py: 8,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={NotificationFlat}
                  alt={NotificationFlat}
                  sx={{
                    width: "5rem",
                    mx: "auto",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "grey",
                    paddingTop: "1rem",
                  }}
                >
                  {" "}
                  There is No Notification
                </p>
              </Box>
            </Menu>
          </Box>
          <Box
            className="icon-dropdown"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleProfileClick}>
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogoutClick}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box className="drawer" sx={{ display: { xs: "block", md: "none" } }}>
          <Button onClick={toggleDrawer} sx={{ color: "white" }}>
            <MenuIcon />
          </Button>
          <Drawer anchor="left" open={drawers} onClose={toggleDrawer}>
            <List>
              {drawerList.map((item, index) => (
                <ListItem key={index} sx={{ width: "10rem" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
