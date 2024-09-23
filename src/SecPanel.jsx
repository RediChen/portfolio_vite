import { useState } from 'react'

export default function Panel() {
  const [some, setSome] = useState(0);
  
  return (
    <div>
      <h2 className='bg-primary'>作品集</h2>
      <button
      className='btn btn-primary'
      onClick={() => setSome(some + 1)}>
          你點了 {some} 下
        </button>
    </div>
  )
}
