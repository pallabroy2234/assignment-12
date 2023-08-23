import React from "react";

const loading = () => {
  return (
    <div className='grid h-screen place-content-center'>
      <progress className='w-56 progress'></progress>
    </div>
  );
};

export default loading;
