import './App.css';
import Home from './components/Home'
import Procedures from './components/Procedures'
import Contacts from './components/Contacts'
import Procedure from './components/Procedure'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    // wrap everythin in the router tags
    <Router>
        <div className='nav'>
          <Link to="/">HOME</Link>
          <Link to="/procedures">Procedures</Link>
          <Link to="/contacts">Contact</Link>
          <Link to="/procedures/cavity">Cavity</Link>
        </div>
        {/* list out all the components here (you can create the component later) */}
        <Route exact activeClassName="active" path='/' component={Home} />
        {/* path is the route and the component will equal the component file that you want to show for the specified path */}
        <Route exact activeClassName="active" path='/procedures' component={Procedures} />
        {/* the below uses render- this is useful when you want to pass in props */}
        <Route path='/procedures/:type' render={(props)=>{
          return <Procedure {...props} />
        }} />
        <Route path='/contacts' render={()=> <Contacts Dentist={'Dr.Drill'}/>} 
        />
        

    </Router>
  );
}

export default App;
