// import { response } from 'express';
// import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Guests from './11Guests'
// import AddGuests from './AddGuests'

// //BUTTON ADD PADA COMPONENT GUESTS
// render(){
//     const ToAddGuest = withRouter(({history})=>(
//         <button onClick={()=> history.push('/add')}>Add Guest</button>
//     ))

//     return (
//         <div>
//             <ToAddGuest/>
//             <table border="1" cellPadding="0" cellSpacing="0"></table>
//         </div>
//     )
// }








// //LATIHAN M11.3
// class App extends Component{
//     render(){
//         return(
//             <Router>
//                 <div>
//                     <Route path='/' exact component={Guests}/>
//                     <Route path='/add' component={AddGuests}/>
//                 </div>
//             </Router>
//         )
//     }
// }
// export default App;







// //LATIHAN M11.2
// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             firstname:'',
//             lastname: '',
//             email: ''
//         }
//     }

//     addGuest(){
//         fetch(
//             'http://localhost:8000/myguests',
//             {
//                 method: 'POST',
//                 headers:{
//                     Accept:'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(this.state)
//             }
//         ).then((response=> response.json()))
//         .then(res=>{
//             this.props.history.goBack()
//         })
//     }

//     setValue(ev){
//         this.setState({
//             [ev.target.name]:ev.target.value
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>Firstname</td>
//                             <td><input type="text" name="firstname" value={this.state.firstname} onChange= {this.setValue.bind(this)}/></td>
//                         </tr>
//                         <tr>
//                             <td>Lastname</td>
//                             <td><input type="text" name="lastname" value={this.state.lastname} onChange= {this.setValue.bind(this)}/></td>
//                         </tr>
//                         <tr>
//                             <td>Email</td>
//                             <td><input type="email" name="email" value={this.state.email} onChange= {this.setValue.bind(this)}/></td>
//                         </tr>
//                         <tr>
//                             <td colSpan="3">
//                                 <button type="button" onClick={this.addGuest.bind(this)}>Save</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
// export default withRouter(App);






// //index.js
// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     if(req.method === "OPTIONS") {
//         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//         return res.status(200).json({});
//     }
//     next();
// });







// //LATIHAN M11.1
// class App extends Component {
//     constructor(){
//         super();
//         this.state ={
//             data_guests : []
//         }
//     }

//     componentDidMount(){
//         fetch('http://localhost:8000/myguests')
//         .then(response=> response.json())
//         .then(res=>{
//             this.setState({
//                 data_guests:res
//             })
//         })
//         .catch(error=>{
//             console.error(error) //error response
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <table border="1" cellPadding="0" cellSpacing="0">
//                     <thead>
//                         <tr>
//                             <th>No</th>
//                             <th>Firstname</th>
//                             <th>Lastname</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.data_guests.map((item, index)=>(
//                                 <tr key={index}>
//                                     <td>{index+1}</td>
//                                     <td>{item.firstname}</td>
//                                     <td>{item.lastname}</td>
//                                     <td>{item.email}</td>
//                                 </tr>    
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
// export default App;





// //HANDLING RESPONSE
// fetch('https://facebook.github.io/react-native/movies.json')
// .then(response=> response.json())
// .then(res=>{
//     //statement for response
// })
// .catch(error=>{
//     console.error(error) //error response
// })




// //FETCH REQUEST
// // MENGAMBIL KONTEN/ RESOURCE DARI WEB SERVICE ATAU FILE
// fetch('https://mywebsite.com/mydata.json')




// //mengambil argumen kedua opsional
// fetch('https://mywebsite.com/endpoint/',{
//     method: 'POST',
//     headers: {
//         Accept: 'application/json',
//     },
//     body: JSON.stringify({
//         firstParam: 'yourValue',
//         secondParam: 'yourOtherValue',
//     }),
// });


