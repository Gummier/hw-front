import React from 'react'
import Logo from '../../assets/footer_sit.png'

function Footer() {
  return (
    <div className='h-[45vh] bg-secondary w-screen '>
      <div className = 'py-4 px-12'>
        <p className='text-white'>📞  000 000 0000</p>
        <p className='text-white'> ⬇️   126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
        <p className='text-white'>✉️ webadmin@sit.kmutt.ac.th</p>
        <p className='text-white'>🟩 @sit.kmutt</p>
        <div className=' flex h-20 justify-end items-end m-4'>

            📷 🟦 ▶️

        </div>
        <hr className='text-white' />
        <div className='flex justify-between '><img src={Logo} alt="Logo" className='w-xs mt-8'/>
        <p className='text-white mt-36 '>School of Information Technology, King Mongkut’s University of Technology Thonburi</p>
        </div>
        
      </div>
    </div>
    
  )
}

export default Footer
