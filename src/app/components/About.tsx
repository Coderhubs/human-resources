import React from 'react'
import Button from './button'

const About = () => {
  return (
    <div id="About">
    <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg ">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">
                We believe that people are an organization’s most valuable asset. Our mission is to help businesses attract, develop, and retain top talent by providing customized HR solutions. With expertise in recruitment, training, performance management, and compliance, we focus on building positive workplace cultures that drive productivity and growth.
                </p> 
                <br/>
                <h6 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h6>
                <p className="mt-4 text-gray-600 text-lg">
                We believe that people are an organization’s most valuable asset. Our mission is to help businesses attract, develop, and retain top talent by providing customized HR solutions. With expertise in recruitment, training, performance management, and compliance, we focus on building positive workplace cultures that drive productivity and growth.
                </p>
                
                <div className="mt-8">
                  <Button />
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="/image/HRM.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default About
