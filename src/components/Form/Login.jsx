import {useState} from "react";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState({username: "", password: ""});
  const navigate = useNavigate()

  function handleUserChange(event) {
    const {name, value} = event.target
    setUser((prevUser) => ({...prevUser, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')
    if (user.username === storedUsername && user.password === storedPassword) {
      alert('Login successful')
      navigate('/')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
      <div className="col-4" >
        <form  onSubmit={handleSubmit} className="mt-5 bg-white border rounded" style={{marginLeft:"200px" ,padding:'30px'}} >
          <h1 style={{fontSize:'24px' , fontWeight:'bold'}}>Login</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input value={user.username} type="text" name={'username'} onChange={handleUserChange}
                   className="form-control" id="username"/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={user.password} type="password" name={'password'} onChange={handleUserChange}
                   className="form-control" id="password"/>
          </div>
          <button type={'submit'} style={{color:'#091579'}} className="btn btn-primary">Submit</button>
        </form>
      </div>
  )
}