import {newBlog} from "@/services/newBlog";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  let data = await newBlog();
  return (
    <>
      <div className='container'>
        <div className='grid gap-5 md:grid-cols-2 grid-col-1 lg:grid-cols-3 '>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className='border border-[2] rounded-b-lg '>
                  <Link href={`/${item.id}`}>
                    <div>
                      <Image src={item.img} alt={item.title} width={500} height={500} className=' h-full w-full lg:h-[250px] object-cover' />
                    </div>
                    <div className='p-3'>
                      <h1 className='mb-3 text-lg font-semibold md:text-xl'>{item.title}</h1>
                      <p>{item.short}</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
