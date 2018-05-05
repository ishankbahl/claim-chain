import React, { Component } from "react";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import { FormGroup, FormLabel, FormControl } from "material-ui/Form";
import Button from "material-ui/Button";
import AccountCircle from 'material-ui-icons/AccountCircle';
import Lock from 'material-ui-icons/Lock';
import { InputAdornment } from 'material-ui/Input';

class RequestClaim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deceasedPublicKey: ""
        };

        this.changeState = this.changeState.bind(this);
    }

    changeState(obj) {
        this.setState(obj);
        this.props.inputHandler(obj);
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <FormGroup id="register" >
                    <FormControl>
                        <TextField
                            id="PublicKey"
                            label="Public Key"
                            className={classes.input}
                            fullWidth
                            marginForm
                            value="0x35435tr43545"
                            disabled
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <br />
                        <TextField
                            required
                            id="deceasedPublicKey"
                            label="Public Key of Deceased"
                            onChange={(e) => this.changeState({ deceasedPublicKey: e.target.value })}
                            className={classes.input}
                            fullWidth
                            marginForm
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Lock />
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <br />
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

const styleSheet = theme => ({
    button: {
        marginTop: 25,
    },
    input: {
        width: 400,
    }
});

export default withStyles(styleSheet)(RequestClaim);