import React from "react";
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { withStyles } from "material-ui/styles";

class BurialSite extends React.Component{
    constructor(){

        super();

        this.state = {

            burialSite: "",

        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){

        this.setState({ burialSite: event.target.value });

        this.props.handleSelect({ burialSite: event.target.value });

    }
    
    render(){

        const { classes } = this.props;

        return(<form className={classes.root}>
            <FormControl className={classes.formControl}>
                <Select
                    value={this.state.burialSite}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'burialSItes',
                    id: 'burial-sites',
                    }}
                >
                    <MenuItem value="">
                        <em>Burial Sites</em>
                    </MenuItem>
                    <MenuItem value={10}>ABC</MenuItem>
                    <MenuItem value={20}>XYZ</MenuItem>
                </Select>
            </FormControl>
        </form>);
    }

}

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
});

export default withStyles(styles)(BurialSite);