import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import LocalHospital from 'material-ui-icons/LocalHospital';
import PersonPin from 'material-ui-icons/PersonPin';

import './index.css';

const styles = {
  card: {
    maxWidth: '450px',
    margin: '25px',
    width: '356px',
    height: "350px"
  },
  span: {
    padding: '5px'
  },
  link: {
    textDecoration: 'none'
  }
};

function UploaderComponent(props) {
  const {
    hospitalHash,
    name,
    age,
    timeOfDeath,
    causeOfDeath,
    doctor,
    hospital,
    docPublicKey
  } = props.details;
  const classes = props.classes;
  const buttonStyle = {
    height: '30px',
    'background-color': 'green',
    padding: '10px',
    'padding-top': '20px',
    'margin-top': '5px',
    display: 'flex',
    'justify-content': 'center',
    'align-content': 'center',
    color: 'white',
    'font-size': '20px',
    'font-weight': 900,
    border: '2px solid green'
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3">
            {name.toUpperCase()}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            Aged {age}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Time of Death:</b> {timeOfDeath}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Cause of Death:</b> {causeOfDeath}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Hospital Hash:</b> {hospitalHash}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Doctor:</b> {doctor}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Hospital :</b> {hospital}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Public key of Doc :</b> {docPublicKey}
          </Typography>
          <div className="uploaderAction" style={buttonStyle}>
            {'Upload Death Certificate'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(UploaderComponent);
