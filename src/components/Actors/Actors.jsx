import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

import { useGetActorDetailsQuery } from "../../services/TMDB";
import useStyles from "./styles";

const Actors = () => {
  const { id: actorId } = useParams();
  const { data } = useGetActorDetailsQuery(actorId);
  const classes = useStyles();

  console.log(data);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <img
          className={classes.actorImage}
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt={data?.name}
        />
      </Grid>
      <Grid item container>
        <Grid item>
          <Typography color="inherit" variant="h2">
            {data?.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="inherit" variant="h5">
            Born {data?.birthday}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Actors;
