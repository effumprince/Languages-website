
// import { VscDeviceCameraVideo } from "react-icons/vsc";
// import { BsFileBarGraphFill } from "react-icons/bs";
// import { FaStar } from "react-icons/fa";
// import React, { useState } from "react";


// interface Benefit {
//   id: number;
 
// }

// const Benefits: Benefit[] = [
//   {
//     id: 1,
//     title: "Introduction to Digital Marketing",
//     lessons: 20,
//     level: "Beginner",
//     instructor: "AnikaZ",
//     price: "$148",
//     image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1761302397/explore2_b7b2lk.png",
//     category: "Graphic Design",
//   },
//   {
//     id: 2,
//     title: "Introduction to Python Programming",
//     lessons: 20,
//     level: "Beginner",
//     instructor: "Wade",
//     price: "$499",
//     image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1761302397/explore2_b7b2lk.png",
//     category: "Web Development",
//   },
//   {
//     id: 3,
//     title: "Introduction to Photography Masterclass",
//     lessons: 20,
//     level: "Beginner",
//     instructor: "Cody",
//     price: "$457",
//     image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1761302397/explore2_b7b2lk.png",
//     category: "Web Development",
//   },
//   {
//     id: 4,
//     title: "Spanish Language Mastery: Beginner to Fluent",
//     lessons: 20,
//     level: "Beginner",
//     instructor: "Dustin",
//     price: "$148",
//     image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1761302397/explore2_b7b2lk.png",
//     category: "Microsoft Office",
//   },
//   {
//     id: 5,
//     title: "Financial Planning for Millennials",
//     lessons: 20,
//     level: "Beginner",
//     instructor: "Bruce",
//     price: "$546",
//     image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1761302397/explore2_b7b2lk.png",
//     category: "UI/UX Design",
//   },
//   {
//     id: 6,
//     title: "Nutrition Essentials for Healthy Living",
//     lessons: 20,
//     level: "Beginner",
//     instructor: "Robert",
//     price: "$345",
//     image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1761302397/explore2_b7b2lk.png",
//     category: "Academic",
//   },
// ];



// const Benefit: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");

//   const filteredCourses =
//     selectedCategory === "All Categories"
//       ? Benefits
//       : Benefits.filter((Benefit) => Benefit.category === selectedCategory);





//   return (
//     <section className="bg-[#fffff] py-16 " id="profile">
//       <div className="lg:max-w-7xl lg:mx-auto sm:w-screen">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row  justify-between lg:items-start items-center sm:items-start mb-10 lg:px-25">
//           <h2 className="text-2xl sm:text-1xl font-bold text-gray-900">
//             Explore Our Courses
//           </h2>
//           <div className="text-sm text-gray-500 mt-2 leading-6 sm:mt-0">
//             Welcome to our diverse and dynamic course <br /> catalog.We're dedicated to providing you ... <br />
//             {/* <a href="#" className="text-blue-600 font-semibold  hover:underline">
//               See All Courses →
//             </a> */}
//           </div>
//         </div>

//         {/* Category Buttons */}
//         {/* <div className="flex flex-wrap   lg:gap-4 gap-5 mx-2 lg:px-2 lg:mx-25 lg:py-2 lg:bg-white  rounded-full mb-10">
          
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-7 py-2  rounded-full text-sm font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-teal-600 text-white "
//                   : "bg-gray-100 text-gray-700 border border-gray-100 hover:bg-blue-100"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div> */}

//         {/* Course Cards */}
//         <div className="grid sm:grid-cols-2 sm:px-10  lg:grid-cols-3 gap-8 lg:w-auto w-auto   lg:px-25  lg:mx-auto  " id="explore">
//           {filteredCourses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-2xl sm:mx-1 lg:w-85 w-80 h-120 mx-auto  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
//               data-aos="fade-up"

//               id="explorecards"
//             >
//               <div className="relative">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="h-65 rounded-2xl lg:w-full w-full object-cover lg:px-2 px-2 lg:py-2 py-2"
//                 />
//                 <div className="absolute top-5 left-5 font-semibold bg-teal-600 text-white text-xs px-5 py-2  rounded-full">
//                   9h 36m
//                 </div>
//                 {/* <button className="absolute top-3 right-3 bg-white text-blue-600 rounded-full p-2 shadow hover:bg-blue-100">
//                   ♥
//                 </button> */}
//               </div>

//               <div className="p-5"> 
//                 <h3 className="font-semibold text-gray-900 text-base mb-3 ">
//                   {course.title}
//                 </h3>

//                 <div className="flex items-center justify-between  text-sm text-gray-500 space-x-4 mb-4">
//                   <span className="flex gap-2"><VscDeviceCameraVideo className="mt-1" /> {course.lessons} Lessons</span>
//                   <span className="flex gap-2"><BsFileBarGraphFill /> {course.level}</span>
//                 </div>

//                 <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//                   <span className="flex gap-2"><FaStar className="text-[#FF9F29]" /> 4.7(6.4k)</span>
//                   <span className="text-gray-700 font-medium">
//                     {course.instructor}
//                   </span>
//                 </div>

//                       <div id="hr" className="w-70 mb-4">
//                         {/* <hr  className="text-gray-400" id="hr"/> */}
//                       </div>  

//                 <div className="flex justify-between items-center">
//                   <span className="text-orange-500 font-bold text-lg">
//                     {course.price}
//                   </span>
//                   <button className="text-blue-600 text-sm font-medium hover:underline">
//                     Enroll Now →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefit;


import React from "react";
import {
  HiOutlineGlobeAlt,
  HiOutlinePencilAlt,
  HiOutlineHeart,
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlinePhotograph,
} from "react-icons/hi";

type CourseCard = {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

const cards: CourseCard[] = [
  {
    id: 1,
    Icon: HiOutlineGlobeAlt,
    title: "Language Learning",
    desc: "Courses teaching languages such as English, Spanish, French, Mandarin and more.",
  },
  {
    id: 2,
    Icon: HiOutlinePencilAlt,
    title: "Creative Arts & Design",
    desc: "Graphic design, digital art, photography and video editing courses for creatives.",
  },
  {
    id: 3,
    Icon: HiOutlineHeart,
    title: "Health & Fitness",
    desc: "Nutrition, fitness training, yoga, meditation and wellness coaching courses.",
  },
 
];

const Benefit: React.FC = () => {
  return (
    <section className="relative overflow-hidden py- px-4 md:px-8 lg: bg-white h-150" id="benefit">
      {/* Faded background text */}
      <div
        aria-hidden
        className="pointer-events-none absolute  inset-0 pt-30 px-10 items-center "
      >
        {/* <h2 className="text-8xl   text-gray-100 opacity-50 tracking-tight select-none leading-none">
          <img src="public/Skillitgh_ (1).png" alt="Skillitgh logo" className="w-screen"  />
        </h2> */}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-8 text-center pt-20">
          <h3 className="text-xl text-[#cf3b05] font-semibold">Education for everyone</h3>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
            Discover skills to level up your career
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid  md:grid-cols-2  sm:grid-cols-1  lg:grid-cols-3 gap-8 grid-rows-2 px-20 ">
          {cards.map(({ id, Icon, title, desc }) => (
            <article
              key={id}
              className="  bg-gray-100  border border-gray-100 shadow rounded-xl p-5 hover:shadow-md transition-shadow duration-200 w-90 h-90 pt-8"
            >
              <div className="block items-start gap-2">
                <div className="flex-shrink-0">
                  <div className="h-18 w-18 rounded-full bg-[#fffff] flex items-center justify-center border border-[#ff4500] mb-4">
                    <Icon className="h-8 w-8 text-[#ff4500] "  />
                  </div>
                </div>

                <div className="">
                  <h4 className="text-base font-semibold text-gray-900">{title}</h4>
                  <p className="text-m text-gray-500 mt-2">{desc}</p>

                  <div className="mt-3">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-[#ff4500] hover:underline"
                    >
                      View Category →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;