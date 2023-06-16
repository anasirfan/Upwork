import clsx from "clsx";
import PropTypes from "prop-types";
import Anchor from "../../../anchor";

const Submenu = ({ menu, className }) => {
    return (
        <ul className={clsx("overlay-submenu", className)}>
            {menu.map(({ id, text, link }) => (
                <li key={id} className="overlay-submenu-item">
                    <Anchor path={link} className={clsx("overlay-submenu-link overlay-link", className)}>
                        {text}
                    </Anchor>
                </li>
            ))}
        </ul>
    );
};

Submenu.propTypes = {
    className: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Submenu;