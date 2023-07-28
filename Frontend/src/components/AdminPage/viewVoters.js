// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminPanel = () => {
//   const [pendingRegistrations, setPendingRegistrations] = useState([]);


//   useEffect(() => {
//     fetchPendingRegistrations();
//   }, []);

//   const fetchPendingRegistrations = () => {
//     axios.get('http://localhost:8080/api/v4/user/get') 
//       .then((response) => {
//         setPendingRegistrations(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching pending registrations:', error);
//       });
//   };

//   const handleApprove = (userId) => {
//     axios.put('http://localhost:8080/api/v4/user/put/${userId}') 
//       .then(() => {
//         console.log('User approved:', userId);
//         fetchPendingRegistrations();
//       })
//       .catch((error) => {
//         console.error('Error approving user:', error);
//       });
//   };

//   const handleDeny = (userId) => {
//     axios.put('http://localhost:8080/api/v4/user/put/${userId}') 
//       .then(() => {
//         console.log('User denied:', userId);
//         fetchPendingRegistrations(); 
//       })
//       .catch((error) => {
//         console.error('Error denying user:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>
  
//       <ul>
//         {pendingRegistrations.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//             <button onClick={() => handleApprove(user.id)}>Approve</button>
//             <button onClick={() => handleDeny(user.id)}>Deny</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminPanel;
