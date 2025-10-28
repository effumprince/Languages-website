
function AboutHome() {
  return (
    <section className="bg-gray-50 h-140 py-20 px-20 w-full" id="abouthome">
        <div className="flex justify-center gap-20">
           <div> <img src="public/young-student-working-assignment (1).jpg" alt="" className="h-110 w-90 object-cover rounded-xl" /></div>

           <div>
            <p className="text-[25px] font-semibold text-[#d43d06] pt-10">About Us</p>
            <h2 className="text-2xl font-semibold pt-4">THE QUICKEST AND EFFECTED WAY <br /> 
                OF LEARNING</h2>
                <p className="max-w-110 text-lg pt-2 text-gray-600">Welcome to Noatrans a learning platform that teaches it student Ghanaian Languages such as Fante, Twi, Ewe, Ga</p>

                <button className="bg-[#ff4500] w-45 h-11 rounded-lg mt-20 text-white">Read More</button>
           </div>


        </div>
    </section>
  )
}

export default AboutHome;