import React, { useState } from 'react';

// import data
import { housesData } from '../data'

// import use params
import { useParams } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  // get the house id

  // button click change
  const [buttonCall, setButtonCall] = useState('Call')

  function handleCall(){
    setButtonCall('09122427432')
  }
 
  let submitted = useState(false);
  const {id} = useParams();
  // console.log(id);
  //get the house based on the id
  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })
  
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold '>{house.name}</h2>
            <h3 className='text-lg mb-4 '>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>₦ {house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt=''/>
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
          <div>{house.description}</div>  
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <p className='text-center text-violet-700' style={{fontWeight: 600, fontSize: 20,}}>Contact Agent</p>
            <div className='flex items-center gap-x-4 mb-6'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt=''/>
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                {/* <Link to='' className='text-violet-700 text-sm'>View Listings</Link> */}
              </div>
            </div>

          <iframe
            title='myFrame'
            name="hidden_iframe"
            id="hidden_iframe"
            style={{display: "none"}}
            onLoad={()=>{if(submitted) {window.location="https://osayandeblessing.vercel.app/"}}}
          />
            {/* Form */}
            <form className='flex flex-col gap-y-2' 
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhWg5vzwL5XjH5aNqI8yvPLctLC00xODVvoUa8MUlPiQnn7Q/formResponse"
                method='POST'
                target="hidden_iframe"
                >
              <input value={house.agent.name} name="entry.1241295239" hidden/>
              <input className='border border-gray-300 focus:border-violet-700 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1340616070" placeholder='Name'/>
              <input className='border border-gray-300 focus:border-violet-700 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.484447215" placeholder='Email'/>
              <input className='border border-gray-300 focus:border-violet-700 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1773388270" placeholder='Phone'/>
                <input className='border border-gray-300 focus:border-violet-700 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.2030273728" placeholder='House Name' value={house.name} readOnly/>
              <input className='border border-gray-300 focus:border-violet-700 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.438470913" placeholder='Location' value={house.address} readOnly/>
              <input className='border border-gray-300 focus:border-violet-700 outline-none 
                rounded w-full px-4 h-10 text-sm' type='text' name="entry.1254124348" placeholder='Price' value={house.price} readOnly/>
              <textarea className='border border-gray-300 focus:border-violet-700 outline-none
                rounded w-full px-4 h-20 text-sm text-black' name="entry.818937493" placeholder='Message' ></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet text-white rounded
                  p-4 text-sm w-full transition'>Send Message</button>
                
              </div>
            </form>

            <button 
                className='block border border-violet-700 text-violet-700 hover:border-violet-500 
                  hover:text-violet-500 rounded p-4 my-3 text-sm w-full transtion'
                  onClick={()=>handleCall()}
                  >{buttonCall}</button>
          </div>
        </div>

      </div>
    </section>
    )
};

export default PropertyDetails;