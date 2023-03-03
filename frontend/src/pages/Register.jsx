import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              id='name'
              name='name'
              value={name}
              placeholder='John Doe'
              type='text'
              className='form-control'
              onChange={onChange}
            />
          </div>

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

          <div className='form-group'>
            <input
              id='password2'
              name='password2'
              value={password2}
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

export default Register
