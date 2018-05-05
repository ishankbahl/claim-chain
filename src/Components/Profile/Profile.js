import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import LocalHospital from 'material-ui-icons/LocalHospital';
import PersonPin from "material-ui-icons/PersonPin";

const styles = {
    card: {
      maxWidth: "345px",
    },
    media: {
      height: 200,
      width: "100%"
    },
    span: {
        padding: "5px",
    },
    link: {
        textDecoration: "none",
    },
    doctor: {
        float: "left",
    },
    hospital: {
        float: "right",
    },
    profile: {
        display: "inline-block",
        paddingRight: "25px",
        paddingLeft: "25px",
    }
  };
  

function Profile(props) {
    const { classes,
         image,
         name,
         age,
         timeOfDeath,
         causeOfDeath,
         doctor,
         hospital,
         } = props;
    return (
        <div className={ classes.profile } >
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Image of Person"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {name}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    Aged {age}
                </Typography>
                <span className={ classes.span } ></span>
                <Typography variant="subheading" color="textSecondary">
                    <b>Time of Death:</b> {timeOfDeath}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    <b>Cause of Death:</b> {causeOfDeath}
                </Typography>
                <span className={ classes.span } ></span>
                <hr />
                <Typography variant="subheading" color="textSecondary">
                    <PersonPin className={classes.doctor} />
                    <span className={classes.doctor} >{doctor}</span>
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    <span className={classes.hospital} >{hospital}</span>
                    <LocalHospital className={classes.hospital} />
                </Typography>
                <span className={ classes.span } ></span>
            </CardContent>
        </Card>
        </div>
    );
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    timeOfDeath: PropTypes.string.isRequired,
    causeOfDeath: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doctor: PropTypes.string.isRequired,
    hospital: PropTypes.string.isRequired,
};
  
export default withStyles(styles)(Profile);