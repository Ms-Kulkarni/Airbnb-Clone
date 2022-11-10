import React from 'react'

function Footer() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-900 '>
      <div className='space-y-4 text-xs text-gray-800 cursor-pointer'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800  cursor-pointer'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It's just a clone</p>
            <p>Referrals accepted</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800  cursor-pointer'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi</p>
            <p>Easter Eggs</p>
            <p>For the Win</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800  cursor-pointer'>
            <h5 className='font-bold'>AIRBNB</h5>
            <p>Learn about new fetures</p>
            <p>Investors</p>
            <p>Letter from Us</p>
            <p>Careers in Web Dev</p>
            <p>Airbnb Luxe</p>
        </div>
    </div>
  )
}

export default Footer
