import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"
import { toast } from "react-toastify"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
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
