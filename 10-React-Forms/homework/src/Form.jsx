import React, {useEffect, useState} from 'react';

export default function  Form() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({});

  function handleChange(e){
    setData((prevData)=>{
      return {
        ...prevData,
        [e.target.name] : e.target.value
      }
    })

    setErrors(validate({
      ...data,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
          type="text" name="username" onChange={handleChange} value={data.username} />
        {errors.username && (
          <p className="danger">{errors.username}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
          type="password" name="password" onChange={handleChange} value={data.password} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
        )}
      </div>
      
      <button>Submit</button>
    </form>
        
  )
}

export function validate(data) {
  let errors = {};
  if (!data.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(data.username)) {
    errors.username = 'Username is invalid';
  }
  if(!data.password) {
    errors.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(data.password)){
    errors.password = 'Password is invalid';
  }
  

  return errors;
};