import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import LocalHospital from 'material-ui-icons/LocalHospital';
import PersonPin from 'material-ui-icons/PersonPin';

import './index.css';

const styles = {
  card: {
    maxWidth: '450px',
    margin: '25px',
    width: '450px'
  },
  media: {
    height: 200
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
    image,
    name,
    age,
    timeOfDeath,
    causeOfDeath,
    doctor,
    hospital
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
        <CardMedia
          className={classes.media}
          image={image}
          title="Image of Person"
          style={{ height: '450px' }}
        />
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
            <b>Doctor:</b> {doctor}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            <b>Hospital :</b> {hospital}
          </Typography>
          <div className="uploaderAction" style={buttonStyle}>
            {'Upload Burial Permit'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(UploaderComponent);
