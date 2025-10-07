
function NavListItem({ nav, onClick, navOnClick }) {
    // Function to close the menu
    const closeMenu = () => {
        onClick();
    };

    // Function to handle navigation click
    const handleNavClick = () => {
        navOnClick(nav._id);
    };

    return (
        <li>
            <a 
                href={nav.link}
                className={nav.active ? 'active' : ''}
                onClick={() => {
                    closeMenu();
                    handleNavClick();
                }}
            >
                {nav.name} <i className={nav.iconClass}></i>
            </a>
        </li>
    );
}

export default NavListItem;
