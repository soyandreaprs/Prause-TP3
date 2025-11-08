import { useEffect } from 'react'
import useArtStore from '../stores/useArtStore'
import { Grid } from '@mui/material'
import ArtCard from '../components/ArtCard'

const Home = () => {
  const getArtworks = useArtStore((state) => state.getArtworks);
  const artworks = useArtStore((state) => state.artworks);

  useEffect(() => {
    getArtworks();
  }, []);

  return (
    <>
      <Grid container spacing={2} justifyContent={"center"} sx= {{marginTop: 10, marginBottom: 10}}>
        {artworks.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={item.objectID}>
              <ArtCard artwork={item} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Home