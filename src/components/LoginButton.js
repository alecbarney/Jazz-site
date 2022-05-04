import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButtn()  {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
    return(
        !isAuthenticated && (
<button className="button-81" onClick={()=> loginWithRedirect()}>Log In </button>)
    )
}


