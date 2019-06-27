import React from 'react';
import SkillList from './SkillList.jsx';

// create group objs according to skill level as prop
const groupBy = (list, property) => {
  const groups = {};
  console.log('list:', list);
  list.forEach(elem => {
    let group = elem[property];
    console.log('group:', group);

    if (!(group in groups)) {
      groups[group] = []; // initiate group as array
    }
    groups[group].push(elem); // if that group already exist, push
  })
  console.log('groups:', groups);
  return groups;
}

const AttendeeList = ({attendees}) => {
  const groups = groupBy(attendees, 'skillLevel');
  console.log('list in AttendeeList', attendees);
  return (
    <div className="attendees">
      <h2>Attendee List</h2>
      <SkillList title="Expert"
        attendees={groups.expert}
      />
      <SkillList title="Intermediate"
        attendees={groups.intermediate}
      />
      <SkillList title="Beginner"
        attendees={groups.beginner}
      />
    </div>
  );
};

export default AttendeeList;