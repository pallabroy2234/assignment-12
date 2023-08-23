import {category} from "@/services/category";
import Link from "next/link";

const Navbar = async () => {
  let data;
  try {
    let res = await category();
    data = res;
  } catch (error) {
    throw new error(error);
  }
  return (
    <>
      <div className='mb-12 shadow navbar bg-base-100'>
        {/* small device navbar */}
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <Link href={"/"}>হোম</Link>
              </li>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={{pathname: "/blog", query: {id: item.id}}}>{item.name}</Link>
                  </li>
                );
              })}
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <a className='text-xl normal-case btn btn-ghost'>ডেইলি নিউজ</a>
        </div>

        {/* Desktop Navbar */}
        <div className='hidden navbar-center lg:flex'>
          <ul className='px-1 menu menu-horizontal'>
            <li>
              <Link href={"./"}>হোম</Link>
            </li>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={{pathname: "/blog", query: {id: item.id}}}>{item.name}</Link>
                </li>
              );
            })}
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
