import React from "react";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { withStyles } from "material-ui/styles";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';
import TextField from "material-ui/TextField";

import { MapData } from "../../Components";
import { data } from "../../data";

class Hospital extends React.Component{

    constructor(){

        super();

        this.state = {
            open: false,
            key: "",
            cause: "",
            time: "",
            doctor: "",
            doctorKey: "",
            hospital: "",
        }

        this.handleClose = this.handleClose.bind(this);
        this.dialogOpen = this.dialogOpen.bind(this);

    }

    dialogOpen(){

        this.setState({ open: true });

    }

    handleClose(){

        this.setState({ open: false });

    }

    render(){

        const { classes } = this.props;

        return (
            <div>
                <MapData data={ data } hospital={ true } />
                <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={ this.dialogOpen } >
                    <AddIcon />
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                >
                    <DialogTitle id="alert-dialog-title">{"Add"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="key"
                            label="What is the public key?"
                            onChange={(e) => this.setState({ key: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="cause"
                            label="What was the cause of death?"
                            onChange={(e) => this.setState({ cause: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="time"
                            label="Time of death?"
                            onChange={(e) => this.setState({ time: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="doctor"
                            label="Name of Doctor?"
                            onChange={(e) => this.setState({ doctor: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="doctorKey"
                            label="What is the public key of doctor?"
                            onChange={(e) => this.setState({ doctorKey: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="hospital"
                            label="Name of the hospital?"
                            onChange={(e) => this.setState({ hospital: e.target.value })}
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
        position: "absolute",
        bottom: 5,
        right: 5,
    }
}

export default withStyles(styles)(Hospital);