import './App.css';
import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import List from './Components/List';
import Form from './Components/Form';

const dummyData = [
  {
      id: 1,
      fname: "John",
      lname: "Smith",
      email: "johnsmith@gmail.com",
      position: "lead" 
  },
  {
      id: 2,
      fname: "Arnold",
      lname: "Rothwell",
      email: "arothwell42@gmail.com",
      position: "" 
  },
  {
      id: 3,
      fname: "Phillis ",
      lname: "Jeron",
      email: "pj.tmicro@gmail.com",
      position: "" 
  },
  {
      id: 4,
      fname: "Sherry",
      lname: "Wilder",
      email: "wilder.sherry@gmail.com",
      position: "" 
  }]

function App() {
  const [teamList, setTeamList] = useState(dummyData)

  //Team List Dummy Data
  const history = useHistory();
 
  function updateTeamList(item) {
    // Item that comes in must look like entry on dummyData
    console.log(item)
    setTeamList([...teamList, item])
    
    
  }


  return (
    <div className="App">
      <h1>Welcome to the team!</h1>
      <div>
        <button onClick={() => history.push('/teamlist')}>Member List</button>
        <button onClick={() => history.push('/')}>Join the team!</button>
        <div>
          <Switch>
            
            <Route exact path='/'>
              <Form teamList={teamList} setTeamList={updateTeamList}/>
            </Route>

            <Route path='/teamlist'>
              <List teamList={teamList}/>
            </Route>

          </Switch>
          
          
        </div>
        
      </div>

        
      
    </div>
  );
}

export default App;
