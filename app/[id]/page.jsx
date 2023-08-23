import {postDetails} from "@/services/postDetails";
import Image from "next/image";

const page = async ({params}) => {
  const id = params.id;
  const details = await postDetails(id);

  const data = details.postDetails;

  const {img, title, content} = data;

  return (
    <>
      <div className='container'>
        <div className=''>
          <div className=''>
            <Image src={img} alt={title} width={1000} height={800} responsive className='w-full ' />
          </div>
          <div className='mt-10'>
            <h1 className='mb-5 text-xl font-bold md:text-3xl'>{title}</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
