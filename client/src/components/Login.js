// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from './Logo.png'
// import './Style.css'
// export default function Login() {
//     const [credentials, setCredentials] = useState({ email: "", password: "" })
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email: credentials.email, password: credentials.password })
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success) {
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken);
//             // history.push("/");
//             navigate('/');

//         }
//         else {
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value })
//     }
//     const handleclick = () => {
//         alert("Curently This feature is Not avaliable")
//     }

//     return (
//         <>
//             <div className="logo text-center">
//             </div>
//             <div className="wrapper">
//                 <img style={{ width: "35%", borderRadius: "50%", display: "block", margin: "10px auto" }} src={Logo} alt="XXXXXX" />
//                 <div className="inner-warpper text-center">
//                     <h2 className="title">Login to your account</h2>
//                     <form action="" id="formvalidate" onSubmit={handleSubmit}>
//                         <div className="input-group">
//                             <label className="palceholder" for="userName"></label>
//                             {/* <input className="form-control" name="userName" id="userName" type="text" placeholder="User Name" /> */}
//                             <input type="email" className="form-control" value={credentials.email} placeholder="Email" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//                             <span className="lighting"></span>
//                         </div>
//                         <div className="input-group">
//                             <label className="palceholder" for="userPassword"></label>
//                             {/* <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password" /> */}
//                             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" placeholder="Password" id="password" />
//                             <span className="lighting"></span>
//                         </div>
//                         <button type="submit" id="login" >Login</button>
//                         <div className="clearfix supporter">
//                             <div className="pull-left remember-me">
//                                 <input id="rememberMe" type="checkbox" />
//                                 <label for="rememberMe">Remember Me</label>
//                             </div>
//                             <a className="forgot pull-right" href="/" onClick={handleclick}>Forgot Password?</a>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="signup-wrapper text-center">
//                     <Link to="/Signup">Don't have an accout? <span className="text-primary">Create One</span></Link>

//                 </div>
//                 <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
//                 <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js'></script>
//             </div>
//         </>
//     )
// }
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from './Logo.png'
// import './Style.css'
// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" })
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/auth/login", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })
//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) {
//       // Save the auth token and redirect
//       localStorage.setItem('token', json.authtoken);
//       // history.push("/");
//       navigate('/');

//     }
//     else {
//       alert("Invalid credentials");
//     }
//   }

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }
//   const handleclick = () => {
//     alert("Curently This feature is Not avaliable")
//   }

//   return (
//     <>
//       <div className="logo text-center">
//       </div>
//       <div className="wrapper">
//         <img style={{ width: "35%", borderRadius: "50%", display: "block", margin: "10px auto" }} src={Logo} alt="XXXXXX" />
//         <div className="inner-warpper text-center">
//           <h2 className="title">Signup New Account</h2>
//           <form action="" id="formvalidate" onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label className="palceholder" for="userName"></label>
//               {/* <input className="form-control" name="userName" id="userName" type="text" placeholder="User Name" /> */}
//               <input type="email" className="form-control" value={credentials.email} placeholder="Name" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//               <span className="lighting"></span>
//             </div>
//             <div className="input-group">
//               <label className="palceholder" for="userPassword"></label>
//               {/* <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password" /> */}
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" placeholder="Password" id="password" />
//               <span className="lighting"></span>
//             </div>
//             <div className="input-group">
//               <label className="palceholder" for="userPassword"></label>
//               {/* <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password" /> */}
//               <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" placeholder="Confirm Password" id="password" />
//               <span className="lighting"></span>
//             </div>
//             <button type="submit" id="login" >Signup</button>
//           </form>
//         </div>
//         <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
//         <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js'></script>
//       </div>
//     </>
//   )
// }
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Login successfully", "success")
        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Login
