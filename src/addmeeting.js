// import React, { useState, useEffect, userLogin } from 'react';
// import { Link, Switch } from 'react-router-dom';
// import axios from 'axios';


// export default function addMeeting() { 


//         axios.post('http://127.0.0.1:8000/api/meetings',
//             {
//                 county:county,
//                 location:location,
//                 day:day,
//                 time:time,
//                 type:type,
//             },
//             {
//                 headers: {'Content-Type': 'application/json'}
//             })
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// };
//     return (
//  <>
// <div className="row">
//                 <div className="col-10 offset-1">
//                     <form onSubmit={addMeet}>
//                         {activeTab === 'login'}
//                         <div className="form-group" id="county">
//                             <label class="sr-only" for="inlineFormInput">County</label>
//                             <input onChange={(e) => setCounty(e.target.value)} type="county" name="email" value={county}
//                                 className="form-control" id="inlineFormInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
//                         </div>
//                         <div className="form-group">
//                             <label for="exampleInputPassword1">Location</label>
//                             <input onChange={(e) => setLocation(e.target.value)} type="location" name="location" value={location} className="form-control " id="location" placeholder="Location"></input>
//                         </div>
//                         <Link onClick={() => setUrl(url)} to={'/Home'} storageData={storageData}> 
//                         <button type="submit" className="btn btn-secondary">Add Meeting</button>
//                         </Link>
//                     </form>
//                 </div>
//             </div>
//           </> 
//     );
    
// }

