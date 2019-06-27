import React from 'react';
import Attendee from './Attendee.jsx';

// show attendees according to skill level
const SkillList = ({title, attendees}) => (
  <div>
    <h3>{title}</h3>
    {attendees ? attendees.map(a =>
      <Attendee attendee={a} key={a._id} />
    ) : `(none)`}
  </div>
);

export default SkillList;