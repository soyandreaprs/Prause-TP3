import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import Buttons from './Buttons'

const ArtCard = ({artwork}) => {
  return (
    <Card sx={{border: "1px solid #B38E48", backgroundColor: "#eeeded", width: 300, height: 400, display: "flex", flexDirection: "column", justifyContent: "space-between"}} >
      <CardMedia component="img" sx={{ width: 300, height: 200 }} image={artwork.primaryImage} alt={artwork.title} />
      <CardContent sx={{flexGrow: 1}}>
        <Typography variant="h6">{artwork.title}</Typography>
        <Typography variant="body1">{artwork.artistDisplayName}</Typography>
        <Typography variant="body2" sx={{color: "#A01F26"}}>Precio</Typography>
      </CardContent>
      <CardActions sx={{justifyContent: "center"}} >
        <Buttons text="Ver detalle" />
        <Buttons text="Agregar al carrito" />
      </CardActions>
    </Card>
  )
}

export default ArtCard