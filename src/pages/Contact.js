import React, { useState } from 'react';

const Contact = () => {
  let submitted = useState(false);
  return(
<div class="container my-5 px-6 mx-auto">
<section class=" text-gray-800">
<h1 className="lg:text-6xl text-3xl text-center md:text-7xl font-bold mb-10 mt-5 text-gray-600">Contact Us</h1>
  <div class="flex flex-wrap">
  
    <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
      <p class="font-bold mb-2">Ask us anything you want to know today</p>
      <h3 className='mb-3'>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.</h3>
      <p className="mb-2">
        <span className='font-bold text-l'>Email:</span> realestate.ng..@gmail.com 
      </p>
      <p className="mb-2">
        <span className='font-bold text-l' >Contact Us Via :</span> +234 568904567 
      </p>
      <p className="mb-2">
        <span className='font-bold text-l' >Location :</span> 51B, Okepopo Street, Lagos Island, Lagos
      </p>

    </div>
    <div class="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
      <p class="font-bold mb-6">Make an Enquiry</p>

      <iframe
          title='myFrame'
          name="hidden_iframe"
          id="hidden_iframe"
          style={{display: "none"}}
          onLoad={()=>{if(submitted) {window.location="http://localhost:3000/"}}}
      />
      <form 
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyxre825ENMoSO4ac3K1tFLZKRG1WtfWvHebZPR1f9_izAWQ/formResponse"
      method='post'
      target="hidden_iframe"
      >
        <div class="form-group mb-6">
          <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded  
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="entry.1615486018"
            placeholder="Name"
            />
        </div>
        <div class="form-group mb-6">
          <input type="email" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            name='entry.1251088303'
            placeholder="Email address"
          />
        </div>
        <div class="form-group mb-6">
          <input type="text" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="entry.2107382534"
            placeholder="Phone Number"
            />
        </div>
        <div class="form-group mb-6">
          <textarea class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="entry.2111053493" rows="3" placeholder="Message"
            ></textarea>
        </div>
        <button type="submit" class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
      </form>
    </div>
       <div className='rounded-lg block w-full lg:flex  mt-12 mb-7' >
          <iframe  style={{width: '1180px', height: '400px'}}
          title='myFrame'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5170238416545!2d3.391223170904317!3d6.455980809682304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b143c6af9e9%3A0x68d35e306c8cdfc!2s51%20Okepopo%20St%2C%20Lagos%20Island%20102273%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1684052686657!5m2!1sen!2sus"
            class="lg:block hidden block left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
             frameBorder="2" allowFullScreen></iframe>
            <iframe  style={{width: '330px', height: '250px'}}
          title='myFrame'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5170238416545!2d3.391223170904317!3d6.455980809682304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b143c6af9e9%3A0x68d35e306c8cdfc!2s51%20Okepopo%20St%2C%20Lagos%20Island%20102273%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1684052686657!5m2!1sen!2sus"
            class="left-0 top-0  lg:hidden mx-2 block w-full rounded-t-lg"
             frameBorder="2"  allowFullScreen></iframe>
    </div>
  </div>
</section>


</div>

  )
};

export default Contact;


