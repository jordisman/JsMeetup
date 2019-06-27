import React from 'react';

const Attendee = ({attendee}) => {
  return (
    <div>
      {`${attendee.firstName} ${attendee.lastName}`}
    </div>
  )
}

export default Attendee;