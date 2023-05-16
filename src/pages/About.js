import React from 'react';
import AboutImage from '../assets/img/about-image.jpg';
import About2 from '../assets/img/about2.jpg';

const About = () => {
  return (
<div className="2xl:container 2xl:mx-auto lg:py-2 py-3 lg:px-20 md:py-0 md:px-6  px-4">
<h2 className="font-bold text-center lg:text-5xl text-3xl mb-7 text-gray-600"> Our Story</h2>
            <div className="lg:mt-10 sm:mt-3 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">

            <div className=" lg:flex items-center w-full lg:w-7/12">
                    <img className="lg:block hidden w-full" style={{borderRadius: 10}} src={AboutImage} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" style={{borderRadius: 10}} src={AboutImage} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" style={{borderRadius: 10}} src={AboutImage} alt="people discussing on board" />
                </div>

                <div className="w-full xl:w-5/12 lg:w-1/12 lg:py-3 py-0">
                    <p className="font-normal text-base leading-6 text-gray-600">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us 
                   and our heirs forever that the English Church shall be free, and shall have her rights entire,
                   The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us 
                   and our heirs forever that the English Church shall be free, and shall have her rights entire,
                   </p>
                </div>
              
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4x9 text-2xl lg:leading-9 leading-7 text-gray-800"
                        style={{lineHeight: 1.2}}
                    > We are here to make great design accessible and delightfull for everyone</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className=" lg:flex items-center w-full lg:w-1/2 mb-8">
                    <img className="lg:block hidden w-full" style={{borderRadius: 10}} src={About2} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" style={{borderRadius: 10}} src={About2} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" style={{borderRadius: 10}} src={About2} alt="people discussing on board" />
                </div>
            </div>
        </div>  );
};

export default About;
