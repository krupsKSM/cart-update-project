import React from 'react'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
  return (
    <div>
        <header className='bg-gray-500 text-white py-4 px-6 flex justify-between'>
            <h1 className='text-xl font-bold'>FakeStore</h1>
            <nav className="space-x-4">
                <Link to='/' className='hover:underline'>Produts</Link>
                <Link to='/cart' className='hover:underline'>Cart</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header