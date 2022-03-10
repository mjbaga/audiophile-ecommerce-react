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
            <NavLink to={`/categories/${item.slug}`} className="text-black uppercase text-xs text-center sm:mx-2 hover:text-primary transition-colors duration-300 font-bold flex flex-col justify-end before:block before:absolute before:bg-darkgray before:w-full before:h-3/4 sm:before:h-3/5 before:bottom-0 before:left-0 relative py-5 before:z-0 before:rounded-lg h-full">
              <div className="relative">
                <img className="mx-auto w-2/5 -mb-4 sm:w-2/3 lg:-mb-4" src={item.image} alt={item.name} />
                <p className="uppercase text-sm mb-4 font-bold md:text-normal lg:text-md">{item.name}</p>
                <p className="right-arrow uppercase"><span className="opacity-50">Shop</span></p>
              </div>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
  
export default ImageNav;