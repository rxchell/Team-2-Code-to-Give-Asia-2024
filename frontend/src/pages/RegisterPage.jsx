// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';

// export default function RegisterPage() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     async function registerUser(e) {
//         e.preventDefault();
//         try {
//             await axios.post('/register', {
//                 name,
//                 email,
//                 password,
//             });
//             alert('Registration successful! You can log in now.');
//             // toast('🦄 Wow so easy!', {
//             //     position: "top-right",
//             //     autoClose: 5000,
//             //     hideProgressBar: false,
//             //     closeOnClick: true,
//             //     pauseOnHover: true,
//             //     draggable: true,
//             //     progress: undefined,
//             //     theme: "light",
//             //     transition: Bounce,
//             // });
//         } catch (error) {
//             alert('Registration failed. Please try again.');
//         }
//     }

//     return (
//         // <div className="mt-4 grow flex items-center justify-around">
//         //     <div className="mb-64">
//         //         <h1 className="text-4xl text-center mb-4">Register</h1>
//         //         <form className="max-w-md mx-auto" onSubmit={registerUser}>
//         //             <input 
//         //                 type="text" 
//         //                 placeholder="John Doe" 
//         //                 value={name} 
//         //                 onChange={e => setName(e.target.value)} 
//         //             />
//         //             <input 
//         //                 type="email" 
//         //                 placeholder="your@email.com" 
//         //                 value={email}
//         //                 onChange={e => setEmail(e.target.value)}
//         //             />
//         //             <input 
//         //                 type="password" 
//         //                 placeholder="password" 
//         //                 value={password}
//         //                 onChange={e => setPassword(e.target.value)}
//         //             />
//         //             <button className="primary">Register</button>
//         //             <div className="text-center py-2 text-gray-500">
//         //                 Already a member? <Link to={'/login'} className="underline text-black">Login</Link>
//         //             </div>
//         //         </form>
//         //     </div>
//         // </div>
//         <div className="mt-4 grow flex items-center justify-around p-20 ">
//             <div className="p-20 bg-[#522985] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.7px]">
//                 <h1 className="text-4xl text-center mb-4 text-light">Register</h1>
//                 <form className="max-w-md mx-auto" onSubmit={registerUser}>
//                     <input
//                         type="text"
//                         placeholder="John Doe"
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="john@email.com"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                     />
//                     <button className="primary text-light mt-8">Register</button>
//                     <div className="text-center py-2 text-gray-400">
//                         Already a member? <Link to={'/login'} className="underline text-gray-300">Login</Link>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

export default function RegisterPage() {
    return (
        <h1>RegisterPage</h1>
    );
};