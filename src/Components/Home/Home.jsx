import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Home.css"
import "./Responsive.css"
import contactImage from "./Contact.svg"
import serviceImage from "../Image/sevicesImageForLaptop.webp"
import easyManagmentImage from "./operation.png"
 import marketingImage from "./bullhorn.png"
 import seo from "./seo.png"
 import coding from "./coding.png"
 import creativity from "./creativity.png"
 import onlineShop from "./online-shop.png"
 
 import contentStrategy from "./content-strategy.png"
 import encryption from "./encrypted.png"
 import community from "./community.png"
 import information from "./information.png"
 
import backGroundImage from "./busy-project-manager-overwhelmed-by-work.jpg"
import appwriteService from "../../appwrite/dataBaseServices";
export default function Home(){
   const { register, handleSubmit, reset } = useForm();
   const [message, setMessage] = useState("");
   
   const handleReset = () => {
    reset();
  };

   const submit = async (data) => {
    if (data){
      const database = await appwriteService.createPost({...data});

      if(database){
        setMessage("We will get back to you soon!");
        reset();
        
      }else{
        setMessage("Uncoditional Error occur!")
      }
    }
   }
   

  const choosUs = [
    {
      id:1,
      heading: "Easy Management",
      content: "Effortless management simplifies tasks, optimizes workflows, and enhances productivity. Streamlined processes and tools ensure smooth operations, reducing complexity and boosting efficiency in various domains.",
      image: easyManagmentImage,
    },
    {
      id:2,
      heading: "Profile Protection",
      content: "Profile protection safeguards personal information and online identity. It employs security measures, authentication, and privacy settings to mitigate risks and ensure data confidentiality in digital spaces.",
      image: encryption,
    },
    {
      id:3,
      heading: "Private Community",
      content: "A private community is an exclusive online space where members with shared interests or affiliations can interact, collaborate, and discuss topics in a secure and restricted environment",
      image: community,
    },
    {
      id:4,
      heading: "24/7 Support",
      content: "24/7 support offers continuous assistance and problem resolution around the clock, ensuring immediate help and guidance whenever needed, enhancing customer satisfaction and peace of mind.",
      image: information,
    },
  ]

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

    return(
    <>

<div className="w-full flex justify-center items-center h-[30rem] bg-[rgb(242,236,234)]">
        <div className="h-auto w-full text-center">
          <h1 className="mt-1 text-blue-600 text-[25px] font-bold" >Ecom<span className="text-green-600">Groww</span></h1>
          <p className="text-[#5161ce] my-3 md:mx-4 ">
          Welcome to ECOMgroww, your one-stop destination for
            unlocking the full potential of
            your
            business! Whether you're an entrepreneur, a small business owner, or a marketing professional, our website
            is
            designed to empower you with the tools, resources, and strategies needed to drive substantial sales growth.
          </p>
        </div>
        <div className="bgImageMoving mb-10">
          <img src={backGroundImage} alt="" className="hidden md:block" />
        </div>

      </div>
    

      {/* services container start */}
     <div className=" animation services-discrip-text-cont w-full mt-14 h-100% mx-auto flex flex-wrap text-center justify-center ">
     <div className=" w-full font-semibold lg:w-96 xl:w-1/2 xl:mt-12 2xl:w-2/6">
            <div>
                <h4 className="animation text-blue-900 mt-4 text-2xl">Our Services</h4>
            </div>
            <div className="p-4 animation">
            Our digital marketing services empower your brand's online presence.
           We specialize in SEO, social media management, content creation, and data-driven strategies.
           By optimizing your digital footprint, we enhance visibility, engage your target audience, and drive growth.
           Let us elevate your online marketing game for lasting success.
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

      {/* client details container start */}
      <div className="clients-details-container animation">
        <div className="data-container">
          <h4>Total Customers</h4>
          <div className="count">
            <p id="total-customers">350</p>
          </div>
        </div>
        <div className="data-container md:hidden lg:block">
          <h4>Optimize site</h4>
          <div className="count">
            <p id="optimize-site">100</p>
          </div>
        </div>
        <div className="data-container">
          <h4>Years of Service</h4>
          <div className="count">
            <p id="years-of-service">2</p>
          </div>
        </div>
        <div className="data-container">
          <h4>Happy Customers</h4>
          <div className="count">
            <p id="happy-customers">295</p>
          </div>
        </div>
      </div>
      {/* client details container end */}
 {/* second choos is container start */}

   <div className="w-full h-[20rem] mt-20 text-center border-2 border-[rgb(109,79,236)] bg-gradient-to-r from-[rgb(109,79,236)] to-[rgb(160,121,248)]">
            <div className="text-white text-[28px] mt-12 font-bold ">
              Why choos us
            </div>
            <div className="text-white mt-5 text-[20px]">
              Easy Management for Your Business
            </div>
   </div>
   <div className="text-center mt-[-10rem] mb-20 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-1">
   {
              choosUs.map((data) => (
                <div className=" second-choosUs w-[18em] mx-auto md:w-[20em] md:h-[22em] lg:w-[15em] xl:w-[21em]">
                  <div className=" w-full text-center mt-12 pt-10 md:pt-0">
                    <img src = {data.image}
                     alt=""
                     className= " w-12 h-12 mx-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className=" font-semibold">
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

     <form className="h-[25rem] w-full" onSubmit={handleSubmit(submit)}>
       <div className="m-1 border-2 border-[#b9b9b9] h-auto mx-auto w-auto md:w-[70%] rounded-lg text-center md:text-left p-3">
        
          {
            message ? <div className="mt-3 text-[18px] text-green-700 text-center">{message}</div> : null
          }
        
      <div className="w-full text-center text-[25px] font-bold mt-4 mb-4">
        Contact Us
      </div>
      <div className="md:flex flex-wrap">
            <input
            className="mt-3 border mr-3 border-black rounded-lg w-full md:w-[15rem] lg:w-[20rem] h-10 pl-3"
             type="text"
              name="Name"
               placeholder="Name"
               { ...register("Name", {required: true})

               }
              />
              <input
            className="mt-3 mr-3 border border-black rounded-lg w-full md:w-[15rem] lg:w-1/2 h-10 pl-3"
             type="email"
              name="Email"
               placeholder="Email"
               { ...register("Email", {required: true})

               }
              />
               <input
            className="my-3 border border-black rounded-lg w-full md:w-[15rem] lg:w-[15rem] h-10 pl-3"
             type="text"
              name="Number"
               placeholder="Enter Number"
               { ...register("Number", {required: true})}
              />
              </div>
              <textarea
               name="Message"
               id="message"
               className="border border-black rounded-lg w-full h-40 p-3 md:w-[70%]"
               placeholder="Enter Your message"
               { ...register("Message")}
               />
                
                <div className="text-start mb-2
                ">
                  <button type="reset"
                  className="mt-5 mx-2 w-24 h-10 rounded-xl text-[20px] bg-blue-500 text-white"
                  onClick={handleReset}
                  >
                    Reset
                  </button>
                <button
                 type="submit"
                 className="mt-5 w-24 h-10 rounded-xl text-[20px] bg-blue-500 text-white"
                 >
                  Submit
                 </button>
                 </div>
       </div> 
     </form>
 {/* Contact us container end */}
    
    </>
    );
}