import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { searchMovie } from "../../features/currentGenreOrCategory";

const Search = () => {
  const classes = useStyles();
  const [query, setquery] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyUp={handleKeyPress}
        value={query}
        onChange={(e) => setquery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
