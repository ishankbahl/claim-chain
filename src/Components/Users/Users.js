import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import AccountBalance from "material-ui-icons/AccountBalance";

const styles = {
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 15,
    position: "absolute",
    width: "275px"
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
  }
};

function renderIcon(component){
    console.log(component);
    switch(component){
        case "AccountBalance": return (<AccountBalance style={{fontSize: "50px",textAlign: "center"}} />);
    }
}

function Users(props) {
  const { classes, name, description, Component } = props;
  return (
    <div>
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