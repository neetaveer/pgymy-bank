import './App.css';
import {BrowserRouter,Switch, Route, Routes, Router } from 'react-router-dom';
import { EmployeeLogin, Header, AdminLogin }  from './components';
import { AnimatePresence } from 'framer-motion';
import EmployeeHome from './components/EmployeeHome';
import '../src/index.css'
import Dashboard from '../src/components/admin/Dashboard';
import CreateAccount from './components/admin/CreateAccount.tsx';
import ProtectedRoute from './components/ProtectedRoute'; // Your ProtectedRoute component

import {useEffect, useState} from 'react'

import CommonSidebar from './components/CommonSidebar';
import ViewAccount from './components/admin/ViewAccount';
import CreateLoanAccount from './components/admin/CreateLoanAccount.tsx';
import ViewLoanAccount from './components/admin/ViewLoanAccount';
import LoanAccStatus from './components/admin/LoanAccStatus';
import NewEmployee from './components/admin/NewEmployee';
import ViewEmployee from './components/admin/ViewEmployee';
import EmpStatus from './components/admin/EmpStatus';

import { auth } from './auth/firebaseConfig'; // Import Firebase auth instance




function App() {
  // Check if a user is authenticated
//   const user = auth.currentUser; 

// console.log(user);



const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return () => {
    unsubscribe();
  };
}, []);




  return (
    <AnimatePresence>
     
        <Routes>
          <Route path="/*" element={<EmployeeLogin />} />
          <Route path="/admin" element={<AdminLogin />} />

          
          <Route path="/admindashboard" element={<CommonSidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="createaccount" element={<CreateAccount />} />
            <Route path="viewaccount" element={<ViewAccount /> } />

            <Route path="createLoanAccount" element={<CreateLoanAccount /> } />
            <Route path="viewLoanAccount" element={<ViewLoanAccount /> } />
            <Route path="loanAccountStatus" element={<LoanAccStatus /> } />
            <Route path="createNewEmployee" element={<NewEmployee /> } />
            <Route path="viewEmployee" element={<ViewEmployee /> } />
            <Route path="empStatus" element={<EmpStatus /> } />

           


            {/* Other sub-routes for CommonSidebar */}
          </Route>
        </Routes>
   
    </AnimatePresence>
  );
}


export default App;
