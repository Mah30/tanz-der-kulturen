/* import Navbar from "./Navbar"; */
import ToggleTheme from "./ToggleTheme/ToggleTheme";




const Header = () => {
    return ( 
        <header
      className="flex items-center justify-between bg-red-900 text-white px-6 py-5 relative"
    >
        <ToggleTheme/>

    
            
         {/*    <Navbar /> */}
            
        </header>
     );
}
 
export default Header;