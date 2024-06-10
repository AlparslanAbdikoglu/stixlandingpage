import React from "react";

const Waitlist = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-8">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-emerald-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          Why Join Our Waitlist? Exclusive Early Access: Be among the first to
          dive into our massive sticker library and start creating. <br></br>Special
          Offers: Enjoy exclusive promotions and discounts, just for our early
          supporters.<br></br> Don’t miss
          out on the fun! Enter your email below to join our waitlist and get
          ready to make your photos pop with personality.
        </p>
        <div className="flex justify-center mt-8">
        <iframe
  src="https://embeds.beehiiv.com/9f17abb1-9f01-4518-9299-73013ef5e6d0?slim=true"
  data-test-id="beehiiv-embed"
  height="52"
  frameBorder="0"
  scrolling="no"
  style={{
    margin: '0',
    borderRadius: '2px',
    backgroundColor: 'transparent',
    border: '2px solid #e5e7eb',
    width: '100%', // Adjust width to fit the container
    maxWidth: '480px', // Set a maximum width
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
  }}
></iframe>
        </div>
      </div>
    </div>
  );
  {
  }
};
export default Waitlist;
