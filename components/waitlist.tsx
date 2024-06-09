import React from 'react';

const Waitlist = () => {
  return <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
  <div className="max-w-2xl mx-auto p-4">
    <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
      Join the waitlist
    </h1>
    <p></p>
    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      lore iosum
    </p>
    <input
      type="text"
      placeholder="yourfancyemail@at.com"
      className="rounded-lg border border-neutral-800 focus:ring-5 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-white"
    />
    </div>
  </div>
{}}
export default Waitlist
