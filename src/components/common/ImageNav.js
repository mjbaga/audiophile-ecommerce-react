import { NavLink } from 'react-router-dom';

const ImageNav = ({ classes, menuIsActive, items, mobileMenu=false, id }) => {
  let mobileTrigger = '';

  if(mobileMenu) {
    mobileTrigger = menuIsActive ? 'translate-y-0' : '-translate-y-full'
  }

  return (
    <nav className={`${ classes ? classes : ''}  ${mobileTrigger}`}>
      <ul id={id} className={`flex flex-col sm:flex-row ${mobileMenu ? 'px-5' : ''}  pb-8 md:container md:mx-auto w-full items-stretch justify-between relative lg:gap-4`}>
        {items.map((item, i) => 
          <li className="nav-item grow" key={i}>
            <NavLink to={`/categories/${item.slug}`} className="uppercase text-xs text-center sm:mx-2 group font-bold flex flex-col justify-end before:block before:absolute before:bg-darkgray before:w-full before:h-3/4 sm:before:h-3/5 before:bottom-0 before:left-0 relative py-5 before:z-0 before:rounded-lg h-full">
              <div className="relative">
                <img className="mx-auto w-2/5 -mb-4 sm:w-2/3 lg:-mb-4" src={item.image} alt={item.name} />
                <p className="uppercase text-sm mb-4 font-bold md:text-normal text-black group-hover:text-primary lg:text-md transition-colors duration-300">{item.name}</p>
                <p className="right-arrow uppercase text-black/50 group-hover:text-primary transition-colors duration-300">Shop</p>
              </div>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
  
export default ImageNav;