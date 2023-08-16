import React,{useState} from 'react'
export const Register = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (eve) => {
        eve.preventDefault();
        console.log(email);
    }
    return (
        
         <div className="auth-form-container">
            <form className='register-form'  onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input value={name} onChange={(eve) => setName(eve.target.value)} name="name" id="name" placeholder='full name' required />
            <label htmlFor="email">Email</label>
            <input value= {email} onChange={(eve) => setEmail(eve.target.value)} type="email" placeholder="mailid@xyz.com" id="email" name="email" required />
            <label htmlFor="password">&#x1F511;</label>
            <input value={password} onChange={(eve) => setPass(eve.target.value)} type="password" placeholder="password" id="password" name="email" required />
            <button><a href="/login" style={{'text-decoration':'none'}}>Sign Up</a></button>
            </form>
            </div>
       
    );
}