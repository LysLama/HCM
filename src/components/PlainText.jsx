import React from 'react';

const PlainText = ({ text }) => {
  return (
    <div style={{ whiteSpace: 'pre-line', lineHeight: 1.7 }}>
      {text}
    </div>
  );
};

export default PlainText;
