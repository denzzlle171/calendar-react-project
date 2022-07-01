import React from 'react';
import './redline.scss';

const RedLine = ({ nowTime }) => {
  return <div style={{ top: nowTime.getMinutes() }} className="red-line"></div>;
};

export default RedLine;
