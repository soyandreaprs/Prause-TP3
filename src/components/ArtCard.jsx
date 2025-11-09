import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import { usePrice } from "../hooks/usePrice";
import useCartStore from "../stores/useCartStore";

const ArtCard = ({ artwork, button, isDetail }) => {
  const addItem = useCartStore((state) => state.addItem);
  const price = usePrice(artwork.objectID);

  const addCart = () => {
    addItem ({
      id: artwork.objectID,
      title: artwork.title,
      image: artwork.primaryImage,
      price,
    })
  };

  return (
    <Card 
      sx={{
        border: "1px solid #B38E48",
        backgroundColor: "#eeeded",
        width: isDetail ? "100%" : 300,
        height: isDetail ? "100%" : 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: isDetail ? "100%" : 300, height: isDetail ? "100%" : 200 }}
        image={artwork.primaryImage}
        alt={artwork.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{artwork.title}</Typography>
        <Typography variant="body1">
          {artwork.artistDisplayName || "Desconocido"}
        </Typography>
        <Typography variant="body1" sx={{ color: "#A01F26" }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {button && (
          <Link
            to={`/artwork/${artwork.objectID}`}
            style={{ textDecoration: "none" }}
          >
            <Buttons text="Ver detalle" />
          </Link>
        )}
        <Buttons onClick={addCart} text="Agregar al carrito" />
      </CardActions>
    </Card>
  );
};

export default ArtCard;