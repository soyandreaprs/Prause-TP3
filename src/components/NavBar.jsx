import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartStore from "../stores/useCartStore";
import { Link } from "react-router-dom";

const NavBar = () => {
const items = useCartStore((state) => state.items);

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#A01F26", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#FFFFFF",
            textDecoration: "none",
            "&:hover": { color: "#D784A1" },
          }}
          component={Link}
          to="/"
        >
          Galería Frontera
        </Typography>
        <Box>
          <IconButton
            sx={{
              color: "#FFFFFF",
              textDecoration: "none",
              "&:hover": { color: "#D784A1" },
            }}
            component={Link}
            to="/cart"
          >
            <Badge badgeContent={items.length} color="#FFFFFF">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
