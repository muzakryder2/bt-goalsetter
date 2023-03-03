import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              id='email'
              name='email'
              value={email}
              placeholder='john@email.com'
              type='email'
              className='form-control'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              id='password'
              name='password'
              value={password}
              placeholder='******'
              type='password'
              className='form-control'
              onChange={onChange}
            />
          </div>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Login
