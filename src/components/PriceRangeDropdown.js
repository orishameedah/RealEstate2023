import React, { useState, useEffect, useContext } from 'react';

// import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import { RiMapPinLine } from 'react-icons/ri';

// import headless ul
import { Menu } from '@headlessui/react';

// import house context
import {HouseContext} from './HouseContext'

const PriceRangeDropdown = () => {
  const {price, setPrice}= useContext(HouseContext);

  // console.log(prices);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100,000 - 130,000',
    },
    {
      value: '130,000 - 160,000',
    },
    {
      value: '160,000 - 190,000',
    },
    {
      value: '190,000 - 220,000',
    },
    {
      value: '10,000 - 30,000',
    },
    {
      value: '30,000 - 40,000',
    },
  ]

  return ( 
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiWallet3Line 
        className='dropdown-icon-primary'/>
        <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose Price range</div>
        </div>
        {
          isOpen ?  (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )
        }
      </Menu.Button>

        <Menu.Items className='dropdown-menu'>
          {prices.map((price, index)=>{
            return (
              <Menu.Item onClick={() => setPrice(price.value)}
               className='cursor-pointer hover:text-violet-700 transition' as="li" key={index}>
                {price.value}
              </Menu.Item>
            )
          })}
        </Menu.Items>
     </Menu>
     
     ) 
};

export default PriceRangeDropdown;