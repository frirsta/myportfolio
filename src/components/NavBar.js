import React from "react";

const NavBar = () => {
  return (
    <div>
      {" "}
      <Box sx={{ padding: "10px" }}>
        <Typography className={styles.Name} level="body1">
          Ali Karem
        </Typography>
        <Typography className={styles.Name} level="body1">
          Frirsta
        </Typography>
      </Box>
    </div>
  );
};

export default NavBar;
