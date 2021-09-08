import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  "@-webkit-keyframes spin": {
    "0%": {
      "-webkit-transform": "rotate(0deg)",
      transform: "rotate(0deg)",
    },
    "100%": {
      "-webkit-transform": "rotate(360deg)",
      transform: "rotate(360deg)",
    },
  },
  "@keyframes spin": {
    "0%": {
      "-webkit-transform": "rotate(0deg)",
      transform: "rotate(0deg)",
    },
    "100%": {
      "-webkit-transform": "rotate(360deg)",
      transform: "rotate(360deg)",
    },
  },
  multiSpinnerContainer: {
    width: "150px",
    height: "150px",
    position: "relative",
    margin: "30px auto",
    overflow: "hidden",
  },
  multiSpinner: {
    position: "absolute",
    width: "calc(100% - 9.9px)",
    height: "calc(100% - 9.9px)",
    border: "5px solid transparent",
    borderTopColor: "#ff5722",
    borderRadius: "50%",
    "-webkit-animation":
      "$spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite",
    animation: "$spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite",
  },
}));

export const LoaderPlaceholder: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.multiSpinnerContainer}>
      <Box className={classes.multiSpinner}>
        <Box className={classes.multiSpinner}>
          <Box className={classes.multiSpinner}>
            <Box className={classes.multiSpinner}>
              <Box className={classes.multiSpinner}>
                <Box className={classes.multiSpinner}></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
