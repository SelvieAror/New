import React, { useState , } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();-
  //   alert(`Email: ${email}\nPassword: ${password}`);
  // };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Sending login:', { email, password });

    try {
        const response = await axios.post('http://localhost:3000/login', {
            email,
            password,
        }, { withCredentials: true }); // Include credentials for session

        if (response.status === 200) {
            alert('Login successful!');
            navigate('/contact'); // Redirect to dashboard
        }
    } catch (error) {
        //console.error(error);
        alert(error.response?.data?.message || 'Server error, please try again.');
    }
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="background">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">Please login to your account</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p className="login-footer">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import '../css/login.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || 'Login failed');
//       } else {
//         alert('Login successful!');
//         localStorage.setItem('token', data.token); // Save token
//         navigate('/dashboard'); // Redirect to dashboard
//       }
//     // eslint-disable-next-line no-unused-vars
//     } catch (error) {
//       setError('Server error, please try again');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="background">
//       <div className="login-container">
//         <div className="login-card">
//           <h2 className="login-title">Welcome Back!</h2>
//           <p className="login-subtitle">Please login to your account</p>
//           {error && <p className="error-message">{error}</p>}
//           <form onSubmit={handleSubmit} className="login-form">
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <div className="password-wrapper">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="toggle-password-btn"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? 'Hide' : 'Show'}
//                 </button>
//               </div>
//             </div>
//             <button type="submit" className="login-btn">
//               Login
//             </button>
//           </form>
//           <p className="login-footer">
//             Don't have an account? <a href="/signup">Sign Up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
