import MenuItems from './MenuItems';



const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;

  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? '' : 'hidden'}`}
    >

      {submenus.map((submenu) => (
        <MenuItems
          key={submenu.key}
          menu={submenu}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
