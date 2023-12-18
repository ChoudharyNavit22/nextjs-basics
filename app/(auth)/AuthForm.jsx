"use client"

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex'>
        <form className="w-3/4" onSubmit={(e) => handleSubmit(e, email, password)}>
                <label htmlFor='auth-email'>
                    <span>Email:</span>
                </label>
                <input
                    id="auth-email" 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required 
                    />

                <label htmlFor='auth-password'>
                    <span>Password:</span>
                </label>
                <input
                    id="auth-password" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required 
                    />
            
            <button className="btn-primary">Submit</button>
        </form>
    </div>
    
  )
}