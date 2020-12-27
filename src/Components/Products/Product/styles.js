import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import { ViewColumn, Autorenew } from "@material-ui/icons";

export default makeStyles(theme => ({



  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },

  card: {
    display: 'flex',
    flexDirection: "row",
    margin: "10px",
    alignItems: "center",
  },

  media: {
    height: 151,
    width: 151,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },

  details: {
    display: 'flex',
  },

  cardContent: {
    flex: '1 0 auto',
    paddingLeft: "10px",
    paddingRight: "10px",
    "&:last-child": {
      paddingBottom: 0,
      paddingTop: 0
    },
  },

  price: {
    paddingTop: "5px",
  },

  playIcon: {
    height: 38,
    width: 38,
    color: "white",
  },

  purchase: {
    backgroundColor: "#BDE7BD",
  },

  cardActions: {
    display: "flex",
    padding: "0",

  },

  cartIcon: {
    padding: "10px",
    color: "white",
  },

}));


