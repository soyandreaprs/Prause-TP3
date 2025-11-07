import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Buttons from './Buttons'

const ArtCard = (artwork) => {
  return (
    <Card sx={{marginTop: 10, border: "solid, #B38E48", backgroundColor: "#eeeded"}} >
      <CardMedia component="img" sx={{ width: "100%", height: 200 }} image={artwork.primaryImage} alt={artwork.title} />
      <CardContent>
        <Typography variant="h6">
          Título
        </Typography>
        <Typography>
          Autor
        </Typography>
        <Typography variant="body2">Precio</Typography>
      </CardContent>
      <CardActions>
        <Buttons text="Ver detalle" />
        <Buttons text="Agregar al carrito" />
      </CardActions>
    </Card>
  )
}

export default ArtCard