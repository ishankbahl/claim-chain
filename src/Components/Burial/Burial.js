import React from 'react';

import { UploaderComponent } from '../../Components';
import { data } from '../../data';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
};

class Burial extends React.Component {
  render() {
    return (
      <div style={style}>
        {data.map(element => <UploaderComponent details={element} />)}
      </div>
    );
  }
}

export default Burial;
