import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";


const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
          {menuItems.map(menu => {
            return (
              <li key={menu.title} className="relative">
                <MenuItems
                  menu={menu}
                />
              </li>
            );
          })}
      </ul>
       
    </nav>
  );
};

export default Navbar;



   {/* Profile dropdown */}
           {/*  <Menu as="div" className="relative ml-3"> */}
          {/*     <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
 */}
         
 


          {/*     <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              > */}
             {/*    <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem> */}
              
           {/*    </MenuItems> */}



/* import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li> 
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
              />
            );
          })}
        </li>
      </ul>
       
    </nav>
  );
};

export default Navbar; */