import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black text-white py-16 flex flex-col gap-14'>
        <div className='w-11/12 gap-10 flex-col mx-auto md:flex-row flex justify-between'>
            <div className='max-w-[300px] flex flex-col gap-5 text-xl'>
                <h1>Dunni's Feeds</h1>
                <p>Address: 18 Univeristy Road, Leicester, LE4 9DG</p>
                <div>
                    <p>Registered Company No. 12345678</p>
                    <p>Charity Company No. 1234567</p>
                </div>
            </div>
            <div className='text-xl'>
                <Link to={'/gallery'} className='cursor-pointer'>Gallery</Link>
            </div>
            <div className='flex md:justify-end gap-8 text-3xl'>
                <a className='cursor-pointer'><IoLogoInstagram /></a>
                <a className='cursor-pointer'><RiTwitterXLine /></a>
                <a className='cursor-pointer'><IoLogoFacebook /></a>
            </div>
        </div>
        <div className='w-11/12 mx-auto gap-5 flex-col sm:flex-row flex justify-between sm:items-center text-sm'>
            <p>COPYRIGHT &copy; DUNNI'S FEEDS 2024</p>
            <p>0300 000 0000 | HELP@DUNNISFOUNDATION.COM</p>
        </div>
    </div>
  )
}

export default Footer