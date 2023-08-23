import React from "react";

const From = () => {
  return (
    <div>
      <form action=''>
        <div className='sm:w-[400px]   h-auto p-4'>
          <div className='mb-3'>
            <label className='label'>
              <span className='label-text'>Name :</span>
            </label>
            <input type='text' placeholder='Enter Your Name' className='w-full rounded-none focus:outline-none input input-bordered text-[14px]' />
          </div>

          <div className='mb-3'>
            <label className='label'>
              <span className='label-text'>Email :</span>
            </label>
            <input type='email' placeholder='Enter Your Email' className='w-full rounded-none focus:outline-none input input-bordered text-[14px]' />
          </div>

          <div className='mb-3'>
            <label className='label'>
              <span className='label-text'>Email :</span>
            </label>
            <input type='text' placeholder='Enter Your Website' className='w-full rounded-none focus:outline-none input input-bordered text-[14px]' />
          </div>

          <div className=''>
            <label className='label'>
              <span className='label-text'>Message: </span>
            </label>
            <textarea className='w-full h-24 resize-none textarea textarea-bordered focus:outline-none' placeholder='Enter Message'></textarea>
          </div>

          <div className='mt-3'>
            <button className='w-full btn btn-outline'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;
