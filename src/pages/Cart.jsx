import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useCartStore from "../stores/useCartStore";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);
  const total = items.reduce((acc, item) => acc +  item.price, 0);
  const navigate = useNavigate();

  return (
    <Box sx={{
        border: "1px solid #A01F26",
        backgroundColor: "#eeeded",
        p: 5,
      }}>
      <Typography variant="h4" sx={{color: "#A01F26"}}>Carrito</Typography>
      {items.length === 0 ? (
        <Typography sx={{lineHeight: 2}}>El carrito está vacío.</Typography>
      ) : (
        <>
          <List>
            {items.map((item) => (
              <ListItem key={item.id}
                secondaryAction={
                  <IconButton onClick={() => removeItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={`$${item.price}`}
                />
              </ListItem>
            ))}
          </List>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" sx={{color: "#A01F26"}}>Total: ${total}</Typography>
            <Buttons
              onClick={() => {
                clear();
                navigate("/");
              }}
              text="Confirmar compra"
            />
            <Buttons onClick={clear} text="Vaciar carrito" />
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Cart;