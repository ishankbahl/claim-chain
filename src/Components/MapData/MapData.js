import React from 'react';
import { Users, Profile } from '../../Components';
import PropTypes from 'prop-types';

class MapData extends React.Component {
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
              />
            ))}
      </div>
    );
  }
}

MapData.propTypes = {
  data: PropTypes.array.isRequired
};

export default MapData;
