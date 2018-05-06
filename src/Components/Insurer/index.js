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
      name: '',
      age: '',
      customerAddress: '',
      policy: '',
      account: accounts[4]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.dialogOpen = this.dialogOpen.bind(this);
    this.dialogClose = this.dialogClose.bind(this);
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

  dialogClose() {
    this.setState({ open: false });
  }

  async handleSubmit() {
    const { name, age, customerAddress, policy, nomineeAddress } = this.state;
    const details = {
      from: this.state.account,
      gas: 4712388,
      gasPrice: 100000000000
    };

    let x = await this.state.claim.methods
      .addCustomer(
        String(name),
        String(age),
        String(customerAddress),
        String(policy),
        String(nomineeAddress)
      )
      .send(details);
    console.log(x);
    this.dialogClose();
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
              label="What is the name of Customer?"
              onChange={e => this.setState({ name: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="key"
              label="What is the customer public address?"
              onChange={e => this.setState({ customerAddress: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="cause"
              label="What is the policy under taken by the customer?"
              onChange={e => this.setState({ term: e.target.value })}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="time"
              label="What is the nominee address?"
              onChange={e => this.setState({ nomineeAddress: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.dialogClose} color="primary">
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
