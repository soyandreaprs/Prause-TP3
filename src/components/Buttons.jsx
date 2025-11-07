import { Button } from '@mui/material'

const Buttons = ({text}) => {
  return (
    <Button variant="contained" sx={{ boxShadow: "none", backgroundColor: "#B38E48", color: "#FFFFFF", textDecoration: "none", "&:hover": { backgroundColor: "#A01F26", boxShadow: "none", cursor: "pointer"} }}>{text}</Button>
  )
}

export default Buttons