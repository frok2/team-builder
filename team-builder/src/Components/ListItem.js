import { useState } from 'react';


function ListItem(props) {

  const { member } = props;
  console.log(member)

  return (
    <div className="List">
      {member.lname}, {member.fname}
    </div>
  );
}

export default ListItem;