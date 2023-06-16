import { IoIosClose } from "react-icons/io";
import clsx from "clsx";
import Anchor from "../../../anchor";
import Megamenu from "./megamenu";
import Submenu from "./submenu";
import { getClosest } from "../../../../utils"
import menuData from "../../../../data/menu.json";

const NavigationOverlay = ({ activeStatus, getActiveStatus }) => {
    const onClickHandler = (e, selector) => {
        const target = e.target;
        const parentEl = target.parentElement;
        if (
            parentEl.classList.contains("has-children") ||
            target.classList.contains("has-children")
        ) {
            e.preventDefault();
            let element = target.classList.contains("has-children") ? parentEl : target;
            const parent = getClosest(element, selector);
            parent.classList.toggle("submenu-open");
        }
    };
    return (
        <div className={clsx("navigation-overlay", activeStatus && "active")}>
        <div className="navigation-overlay__content">
            <button
                className="navigation-overlay__close-icon"
                onClick={() => {
                    getActiveStatus(false);
                    document.querySelector("body").classList.remove("overflow-hidden");
                }}
            >
                <IoIosClose />
            </button>
            <div className="navigation-overlay__content-container">
                <ul className="overlay-menu">
                    {menuData.map((menu, i) => {
                        const submenu = menu.submenu ? menu.submenu : null;
                        const megamenu = menu.megamenu ? menu.megamenu : null;
                        const menuIndex = i;
                        return (
                            <li
                                key={`mainmenu-${menu.id}`}
                                className="overlay-menu-item"
                                id={`menu-item-${menuIndex}`}
                            >
                                <Anchor 
                                    path={menu.link} 
                                    className={clsx((!!megamenu || !!submenu) && "has-children", "overlay-menu-link overlay-link") }                                    
                                    onClick={(e) => onClickHandler(e, `#menu-item-${menuIndex}`)}
                                >
                                    {menu.text}
                                </Anchor>
                                {!!megamenu && <Megamenu menu={megamenu} onClickHandler={onClickHandler} />}
                                {!!submenu && <Submenu menu={submenu}/>}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
        </div>
    );
};

export default NavigationOverlay;
