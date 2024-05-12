import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import {
  useGetActorDetailsQuery,
  useGetMoviesByActoridQuery,
} from "../../services/TMDB";
import useStyles from "./styles";
import MoviesList from "../MovieList/MovieList";

const Actors = () => {
  const page = 1;
  const { id: actorId } = useParams();
  const { data, isFetching, error } = useGetActorDetailsQuery(actorId);
  const { data: movies } = useGetMoviesByActoridQuery({ actorId, page });
  const classes = useStyles();
  const history = useHistory();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history.goBack()}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.actorImage}
            src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>

        <Grid item lg={7} xl={8} className={classes.actorInfoContainer}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || "Sorry, no biography yet..."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => history.goBack()}>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MoviesList movies={movies} numberOfMovies={12} />}
      </Box>
    </>
  );
};

export default Actors;
