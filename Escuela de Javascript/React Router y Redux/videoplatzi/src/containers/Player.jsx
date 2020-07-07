/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hashPlaying = Object.keys(props.playing).length > 0;
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) return <h2>Cargando...</h2>;

  return hashPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : <Redirect to='/404/' />;
};

const mapToStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapToStateToProps, mapDispatchToProps)(Player);
