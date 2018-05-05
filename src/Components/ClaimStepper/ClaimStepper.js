import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { RequestClaim, BurialSite, SimpleSnackbar } from '../../Components';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return ['Request Claim', 'Choose Burial Site', 'Claim'];
}

class ClaimStepper extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      deceasedPublicKey: '',
      burialSite: ''
    };

    this.changeDeceasedPublicKey = this.changeDeceasedPublicKey.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  changeDeceasedPublicKey(obj) {
    this.setState(obj);
  }

  handleSelect(obj) {
    this.setState(obj);
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <RequestClaim inputHandler={this.changeDeceasedPublicKey} />;
      case 1:
        return <BurialSite handleSelect={this.handleSelect} />;
      case 2:
        return `Death Certificate of Deasesed: 23dfsd09q229e898329`;
      default:
        return 'Unknown step';
    }
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? 'Sign with private key'
                          : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

ClaimStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ClaimStepper);
