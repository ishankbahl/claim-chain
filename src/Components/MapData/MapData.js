import React from 'react';
import { Users, Profile } from '../../Components';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

class MapData extends React.Component {

  constructor(){
      
    super();

    this.changeUrl = this.changeUrl.bind(this);

  }

  changeUrl(key){

    const { history } = this.props;

    switch(key){

        case 0: history.push('/insurer');
                break;
        case 1: history.push('/nominee');
                break;
        case 2: history.push('/hospital');
                break;
        case 3: history.push('/government');
                break;
        case 4: history.push('/burial');
                break;

    }

  }

  render() {
    const { data, hospital } = this.props;

    return (
      <div
        style={{
          backgroundColor: 'white',
          paddingBottom: '350px',
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'space-around'
        }}
      >
        {hospital
          ? data.map((element, key) => (
              <Profile
                age={element.age}
                name={element.name}
                image={element.image}
                key={key}
                timeOfDeath={element.timeOfDeath}
                causeOfDeath={element.causeOfDeath}
                doctor={element.doctor}
                hospital={element.hospital}
              />
            ))
          : data.map((element, key) => (
              <Users
                name={element.name}
                Component={element.Component}
                description={element.description}
                key={key}
                onClick={() => this.changeUrl(key)}
              />
            ))}
      </div>
    );
  }

}

MapData.propTypes = {
  data: PropTypes.array.isRequired
};

export default withRouter(MapData);
