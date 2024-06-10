import React from "react";

interface Props {
  children: React.ReactNode;
}

const CenteredButton: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        {children}
      </button>
    </div>
  );
};

export default CenteredButton;
