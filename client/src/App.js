import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memgram from "./images/memgram.png";
import useStyles from "./styles";
import "./App.css";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]); // currentId is in this array of dependencies cause when you clear the form, you're setting currentId to null.

  return (
    <div className={classes.main}>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static">
          <Typography variant="h3" align="center" className={classes.heading}>
            MemGram
          </Typography>
          <img
            className={classes.image}
            src={memgram}
            alt="memgram"
            height="100"
          />
        </AppBar>

        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
