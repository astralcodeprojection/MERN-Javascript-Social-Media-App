import React from 'react'
import birthdayIcon from '../../assets/giftBox.png'
import ad from '../../assets/ad.jpeg'
import profilePicture from "../../assets/profilePicture.jpg"
import UsersOnline from '../UsersOnline/UsersOnline'
import { Users } from '../../data/dummyData'


const RightBar = ({profile}) => {
  const RightBarHome = () => {
    return(
      <>
      <div className='flex items-center'>
          <img src={birthdayIcon} alt='birthday icon' className='w-[40px] h-[40px] mr-[10px]'/>
          <span className='font-semibold text-md'>
            <b>Anata Pursin</b> and <b>7 others</b> have a birthday today
          </span>
        </div>
        <img src={ad} alt='advertisement' className='w-full rounded-lg mt-[30px] mb-[30px]'/>
        <h1 className='font-bold text-lg mb-[20px]'>Online</h1>
        <ul className='m-0 p-0'>
          {Users.map((user) => (
            <UsersOnline key={user.id} user={user}/>

          ))}
          
        </ul>
        </>
    )
  }
  const RightBarProfile = () =>{
    return (
      <>
      <h1 className='font-bold text-xl mb-[10px]'>User Information</h1>
      <div className='mb-[30px]'>
        <div className='mb-[10px]'>
          <span className='font-semibold mr-[15px] text-slate-500'>City:</span>
          <span>Atlanta</span>
        </div>
        <div className='mb-[10px]'>
          <span className='font-semibold mr-[15px] text-slate-500'>From:</span>
          <span>New York</span>
        </div>
        <div className='mb-[10px]'>
          <span className='font-semibold mr-[15px] text-slate-500'>Relationship:</span>
          <span>Single</span>
        </div>
        <h1 className='font-bold text-xl mb-[10px]'>Friends</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <img src={profilePicture} alt='User Photo' className='w-[100px] h-[100px] object-cover rounded-md'/>
            <span>Lorra Belle</span>
          </div>
          <div>
            <img src={profilePicture} alt='User Photo' className='w-[100px] h-[100px] object-cover rounded-md'/>
            <span>Lorra Belle</span>
          </div>
          <div>
            <img src={profilePicture} alt='User Photo' className='w-[100px] h-[100px] object-cover rounded-md'/>
            <span>Lorra Belle</span>
          </div>
          <div>
            <img src={profilePicture} alt='User Photo' className='w-[100px] h-[100px] object-cover rounded-md'/>
            <span>Lorra Belle</span>
          </div>
          <div>
            <img src={profilePicture} alt='User Photo' className='w-[100px] h-[100px] object-cover rounded-md'/>
            <span>Lorra Belle</span>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <div style={{flex:3.5, zIndex: -1}}>
      <div className='pr-[20px] pl-[20px] pt-[20px]'>
        {profile ? <RightBarProfile/> : <RightBarHome/>}
      </div>
    </div>
  );
};

export default RightBar