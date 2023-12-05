import {useState} from "react";

export default function Register() {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleUserChange(event) {
    const {name, value} = event.target
    setUser((prevUser) => ({...prevUser, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (user.username !== '' && user.password !== '') {
      localStorage.setItem('username', user.username)
      localStorage.setItem('password', user.password)
    } else {
      alert("Please fill in both fields")
    }
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <input value={user.username} type="text" name={'username'} onChange={handleUserChange}/>

          <label>password</label>
          <input value={user.password} type="password" name={'password'} onChange={handleUserChange}/>
          <button type={'submit'}>Submit</button>
        </form>
      </div>
  )
}