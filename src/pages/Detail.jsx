import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import useArtStore from "../stores/useArtStore";
import Loading from "../components/Loading";
import ArtCard from "../components/ArtCard";
import Error from "../components/Error";

const Detail = () => {
  const { id } = useParams();
  const getArtworkByID = useArtStore((state) => state.getArtworkByID);
  const artwork = useArtStore((state) => state.artwork);
  const loading = useArtStore((state) => state.loading);
  const errorID = useArtStore((state) => state.errorID);

  useEffect(() => {
    getArtworkByID(id);
  }, [id]);

  return (
    <>
      {loading && <Loading />}
      {errorID && <Error text="Error al obtener la obra." />}
      {artwork && (
        <Grid container sx={{ pt: 20, pb: 10 }}>
          <ArtCard artwork={artwork} button={false} isDetail={true} />
        </Grid>
      )}
    </>
  );
};

export default Detail;