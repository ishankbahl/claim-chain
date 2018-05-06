import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import AccountBalance from "material-ui-icons/AccountBalance";
import People from "material-ui-icons/People";
import Work from "material-ui-icons/Work";
import Accessibility from "material-ui-icons/Accessibility";
import LocalHospital from "material-ui-icons/LocalHospital";
import Gavel from "material-ui-icons/Gavel";

const styles = {
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 15,
    position: "relative",
    width: "275px",
  },
  big: {
    fontSize: "50px",
    textAlign: "center",
  },
  description: {
      display: "inline-block",
      width: "225px"
  },
  span: {
    padding: "5px",
  },
  user: {
    display: "inline-block",
    paddingRight: "25px",
    paddingLeft: "25px",
  }
};

function renderIcon(component){
    console.log(component);
    switch(component){
        case "AccountBalance": return (<AccountBalance style={{fontSize: "50px",textAlign: "center"}} />);
        case "People": return (<People style={{fontSize: "50px",textAlign: "center"}} />);
        case "Gavel": return (<Gavel style={{fontSize: "50px",textAlign: "center"}} />);
        case "Accessibility": return (<Accessibility style={{fontSize: "50px",textAlign: "center"}} />);
        case "LocalHospital": return (<LocalHospital style={{fontSize: "50px",textAlign: "center"}} />);
    }
}

function Users(props) {
  const { classes, name, description, Component } = props;
  return (
    <div className={ classes.user } >
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          {name}
        </Typography>
        <div>
            <Typography component="p" className={classes.description} >
                {description}
            </Typography>
        {renderIcon(Component)}
        </div>
        <span className={ classes.span } ></span>
        <hr />
        <span className={ classes.span } ></span>
      </Paper>
    </div>
  );
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withStyles(styles)(Users);