import React from "react";
import styles from "../styles/Introduction.module.css";
import Box from "@mui/joy/Box";
import { Grid } from "@mui/joy";

const IntroductionSection = () => {
  return (
    <Box className={styles.IntroductionContainer}>
      <Grid className={styles.GridContainer} container>
        <Grid>
          <p className={`${styles.Introduction} ${styles.Role}`}>
            Full Stack Dev.
          </p>

          <p className={`${styles.Introduction} ${styles.Role}`}>Living in</p>
        </Grid>
        <Grid className={styles.LocationContainer}>
          <p className={`${styles.Introduction} ${styles.Location}`}>
            Stockholm
          </p>

          <p className={`${styles.Introduction} ${styles.Location}`}>Sweden</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroductionSection;
