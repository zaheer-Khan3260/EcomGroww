import React from 'react';
import "./Services.css"
import "./Responsive.css"
import marketingImage from "./bullhorn.png"
import serviceImage from "../Image/sevicesImageForLaptop.webp"
 import seo from "./seo.png"
 import coding from "./coding.png"
 import creativity from "./creativity.png"
 import onlineShop from "./online-shop.png"
 import contentStrategy from "./content-strategy.png"

function Services() {
    const serviceItems = [
        {
          id: 1,
          heading: "Marketing",
          content: "Full marketing services SEO, social media, content creation, data-driven strategies for brand growth and success.",
          image: marketingImage,
        },
        {
          id: 2,
          heading: "SEO",
          content: "SEO boosts website visibility, drives organic traffic with keyword optimization, content improvement, and technical enhancements.",
          image: seo,
        },
        {
          id: 3,
          heading: "Web Developer",
          content: "Full maWeb developers use HTML, CSS, JavaScript to create and maintain sites, aligning design with client goals.",
          image: coding,
        },
        {
          id: 4,
          heading: "Creative",
          content: "Full mCreative ideas inspire, engage, and drive fresh perspectives, fostering problem-solving, artistic expression, and business growth.",
          image: creativity,
        },
        {
          id: 5,
          heading: "E-Commerce",
          content: "E-commerce growth expand customers, optimize user experience, diversify products, and employ effective marketing for market dominance.",
          image: onlineShop,
        },
        {
          id: 6,
          heading: "Business Strategy",
          content: "Business strategy outlines goals, involves decision-making, resource allocation, and positioning for industry success and sustainability.",
          image: contentStrategy,
        },
      ]
  return (
    <>
     {/* services container start */}
     <div className=" animation services-discrip-text-cont w-full mt-14 h-100% mx-auto flex flex-wrap text-center justify-center ">
     <div className=" w-full font-semibold lg:w-96 xl:w-1/2 xl:mt-12 2xl:w-2/6">
            <div>
                <h4 className="animation text-blue-900 mt-4 text-2xl">Our Services</h4>
            </div>
            <div className="p-4 animation">
            At Paramth Groupe, we offer a comprehensive range of services to make your real estate journey a seamless and rewarding experience.
            Whether you're a first-time homebuyer, an experienced investor, or looking to sell your property, our team of dedicated professionals is here to assist you every step of the way.
            </div>
        </div>
        <div className="animation w-96 h-auto hidden lg:block xl:w-[30rem]">
            <img src={serviceImage} alt="Image" />
        </div>
        <div className=" w-full h-auto flex flex-wrap justify-center xl:w-[80%] 2xl:w-[60%]">
            {
              serviceItems.map((data) => (
                <div className=" services-container w-72 mx-4 lg:mx-4 mt-8 lg:mt-12 rounded-lg hover:bg-blue-400 hover:text-white ">
                  <div className=" w-full text-center mt-12">
                    <img src = {data.image}
                     alt=""
                     className= " w-12 h-12 mx-auto lg:mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className=" font-bold text-[20px] ">
                        {data.heading}
                    </h5>
                </div>
                <div className=" my-6">
                    <p className="mx-2 text-sm">
                        {data.content}                    
                      </p>
                </div>
                  </div>
              ))
            }
        </div>
     </div>

      {/* services container end */}
      </>
  );
}

export default Services;