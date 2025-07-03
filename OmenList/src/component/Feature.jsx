import React from "react";

const Feature = () => {
  return (
    <div className="w-full py-12">
      <div className="w-full px-10 p  border-b-[1px] pb-15 border-zinc-700 ">
        <h1 className='text-8xl font-["Neue_Montreal"]'>Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards mt-10 w-full flex gap-10">
          
          {/* First Card */}
          <div className="card1 w-1/2 rounded-xl h-[75vh] bg-red-500 overflow-hidden relative">
            <div className="cardcontainer w-full h-full rounded-xl">
              <img
                className="w-full h-full object-cover"
                src="https://www.shutterstock.com/image-vector/african-american-girl-caucasian-boy-260nw-1403249198.jpg"
                alt="First"
              />
            </div>
          </div>

          {/* Second Card with FYDE Fully Visible on Left */}
          <div className="card1 w-1/2 rounded-xl h-[75vh] bg-red-500 flex overflow-hidden relative ">
            <h1 className="z-[9] absolute text-8xl b text-black -translate-x-1/2 top-1/2 -translate-y-1/2 pl-5">FYDE</h1>
            <div className="cardcontainer w-full h-full absolute top-0 left-0 rounded-xl">
              <img
                className="w-full h-full object-cover"
                src="https://www.shutterstock.com/image-photo/overjoyed-millennial-man-woman-triumph-260nw-1822495244.jpg"
                alt="Second"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Feature;
