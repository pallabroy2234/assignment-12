import {categoryByBlog} from "@/services/categoryByblog";
import Image from "next/image";

const Blog = async ({searchParams}) => {
  const id = searchParams.id;
  let data;
  try {
    let res = await categoryByBlog(id);
    data = res;
  } catch (error) {
    throw new error(error);
  }

  return (
    <div className='container'>
      <div className='grid gap-5 md:grid-cols-2 grid-col-1 lg:grid-cols-3 '>
        {data.map((item) => {
          const {title, img, short} = item;
          return (
            <div key={item.id}>
              <div className='border border-[2] rounded-b-lg '>
                <div>
                  <Image src={img} alt={item.title} width={500} height={500} className=' h-full w-full lg:h-[250px] object-cover' />
                </div>
                <div className='p-3'>
                  <h1 className='mb-3 text-lg font-semibold md:text-xl'>{title}</h1>
                  <p>{short}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
