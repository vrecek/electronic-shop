import React from 'react'

const LoginOptions = () => {
   return (
      <div className="options">

         <div>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember me</label>
         </div>

         <h5>Forgot password</h5>

      </div>
   )
}

export default LoginOptions