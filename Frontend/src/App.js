import logo from './logo.svg';
import './App.css';

import './components/router.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UserRegistration from './components/userRegistration';
import AdminLogin from './components/adminLogin';
import CandidateRegistration from './components/candidateRegister';
import UserLogin from './components/userLogin';
import HomePage from './components/homepage';
import CandidateLogin from './components/candidateLogin';

import Sidebar from './components/sidebar';
import Dashboard from './components/AdminPage/Dashboard';
import Votes from './components/AdminPage/Votes';
import Candidate from './components/AdminPage/Candidate';
import Voter from './components/AdminPage/Voter';

import './sidebar.css';
import SidebarVoter from './components/sidebarVoter';
import Profile from './components/VoterPage/Profile';
import CandidateList from './components/VoterPage/CandidateList';

import Instruction from './components/VoterPage/instruction';

import VoterHome from './components/VoterPage/voterhome';

import Cruddata from './components/AdminPage/cruddata';
import Empcreate from './components/AdminPage/Candidcreate';
import Empedit from './components/AdminPage/Candidedit';
import './components/AdminPage/curd.css';
import CrudVoter from './components/AdminPage/curdVoter';
import Voteredit from './components/AdminPage/voteredit';
import Votercreate from './components/AdminPage/votercreate';
import ListCandidate from './components/VoterPage/ListCandidate';
import AdminHome from './components/AdminPage/adminHome';
import Ballot from "./components/VoterPage/Ballot";
import FeedBack from './FeedBack/feedback';
                                                          
function App() {
  return (
    <div>
      <>
    
      <div className="App">
     
        
        
      
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<UserLogin />} />
              {/* <Route path="/signIn" element={<CandidateLogin />} /> */}
              <Route path="/sign-up" element={<AdminLogin/>} />
              <Route path="/RegistrationV" element={<UserRegistration/>}/>
              <Route path="/RegistrationC" element={<CandidateRegistration/>}/>
              {/* <Route path="/adminHome" element={<AdminHome/>}/> */}
       
              <Route path="/adminHome" element={<AdminHome/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
             
              <Route path="/votes" element={<Votes/>}/>
              <Route path="/curd" element={ <Cruddata/> }/>
              <Route path="/empdata/:empid" element={ <Empedit/> }/>
              <Route path="/empadd" element={ <Empcreate/> }/>
              {/* <Route path="/candidate" element={<Candidate/>}/> */}
            
              <Route path="/voter" element={ <CrudVoter/> }/>
              <Route path="/voterdata/:voterid" element={ <Voteredit/> }/>
              <Route path="/voteradd" element={ <Votercreate/> }/>
             
              <Route path="/voterhome" element={<VoterHome/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/listCandidate" element={<ListCandidate/>}/>
              <Route path="/instruction" element={<Instruction/>}/>
              <Route path="/ballot" element={<Ballot/>}/>
              <Route path="/feedback" element={<FeedBack/>} />
       </Routes>
     
          </div>
          </div>
     
      </div>
  
   </>
    </div>
  );
}

export default App;


