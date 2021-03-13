import ListItem from './ListItem'


function List(props) {

  const { teamList } = props;
  console.log(teamList)

  return (
    <div className='list-container'>
      <ul>
        {teamList.map( (member, index) => {
          return <ListItem member={member} key={index}/>})
        
        }
      </ul>
    </div>
  );
}

export default List;