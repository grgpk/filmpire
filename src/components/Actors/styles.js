import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  actorImage: {
    maxWidth: "90%",
    boxShadow: ".5em .5em 1em",
    objectFit: "cover",
    borderRadius: "20px",
  },

  actorInfoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column !important",
  },
}));
