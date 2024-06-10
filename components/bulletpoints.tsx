import React from 'react';

const Bulletpoints = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <main className="flex-grow">
        <section className="flex justify-center bg-black mt-5 mb-5">
          <div className="flex flex-col justify-center ml-7 md:ml-10 lg:ml-14 xl:ml-20 p-6 bg-white rounded-lg shadow-md opacity-95">
            <div className="text-lg font-medium text-emerald-500 mb-5 md:mb-7 lg:mb-10 xl:mb-12">
              Edit your images with cool stickers
            </div>
            <div className="text-lg font-medium text-emerald-500 mb-5 md:mb-7 lg:mb-10 xl:mb-12">
              Choose from 150K stickers!!
            </div>
            <div className="text-lg font-medium text-emerald-500 mb-5 md:mb-7 lg:mb-10 xl:mb-12">
              #Sticker for every occasion
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Bulletpoints;