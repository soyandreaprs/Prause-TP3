import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import useArtStore from "../stores/useArtStore";
import ArtCard from "../components/ArtCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const getArtworks = useArtStore((state) => state.getArtworks);
  const artworks = useArtStore((state) => state.artworks);
  const loading = useArtStore((state) => state.loading);
  const error = useArtStore((state) => state.error);

  useEffect(() => {
    getArtworks();
  }, []);

  return (
    <>
      {error && <Error text="Error al obtener las obras." />}
      {loading ? (
        <Loading />
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          sx={{ pt: 10 }}
        >
          {artworks.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} key={item.objectID}>
                <ArtCard artwork={item} button={true} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Home;