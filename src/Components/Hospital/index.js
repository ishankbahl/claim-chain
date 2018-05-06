import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import { MapData } from '../../Components';
import { data } from '../../data';
import address from '../../utils/claim';
import web3 from '../../utils/web3';
import { accounts } from '../../data';

class Hospital extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
      key: '',
      name: '',
      cause: '',
      time: '',
      doctor: '',
      doctorKey: '',
      hospital: '',
      claim: null,
      account: accounts[1]
    };

    this.handleClose = this.handleClose.bind(this);
    this.dialogOpen = this.dialogOpen.bind(this);
  }

  async componentDidMount() {
    let a = await address('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
    this.setState({
      claim: a
    });
  }

  dialogOpen() {
    this.setState({ open: true });
  }

  async handleClose() {
    this.setState({ open: false });
    const { name, time, cause, key, place } = this.state;
    const details = {
      from: this.state.account,
      gas: 4712388,
      gasPrice: 100000000000
    };
    console.log(details);
    console.log(this.state.account);
    let x = await this.state.claim.methods
      .reportDeath(
        String(name),
        String(time),
        String(place),
        String(cause),
        String(key)
      )
      .send(details);
    console.log(x);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MapData data={data} hospital={true} />
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}
          onClick={this.dialogOpen}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">{'Add'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="key"
              label="What is the name of deseased?"
              onChange={e => this.setState({ name: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="key"
              label="What is the public key?"
              onChange={e => this.setState({ key: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="cause"
              label="What was the cause of death?"
              onChange={e => this.setState({ cause: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="time"
              label="Time of death?"
              onChange={e => this.setState({ time: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="doctor"
              label="Name of Doctor?"
              onChange={e => this.setState({ doctor: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="doctorKey"
              label="What is the public key of doctor?"
              onChange={e => this.setState({ doctorKey: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="hospital"
              label="Name of the hospital?"
              onChange={e => this.setState({ hospital: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '32px'
  }
};

export default withStyles(styles)(Hospital);
