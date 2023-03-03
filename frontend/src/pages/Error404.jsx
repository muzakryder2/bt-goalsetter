import { useRouteError } from "react-router-dom"

function Error404() {
  const error = useRouteError()

  return (
    <div className='container'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
export default Error404
