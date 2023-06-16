import clsx from "clsx";
import PropTypes from "prop-types"
import Anchor from "../../../anchor"

const Megamenu = ({className, menu, onClickHandler}) => {
    return (
        <div className={clsx("overlay-megamenu", className)}>
            {menu.map(({ id, title, submenu }) => (
                <div key={id} id={`submenu-item-${id}`} className="overlay-megamenu-item">
                    <h2 className="has-children overlay-megamenu-title overlay-link" onClick={(e) => onClickHandler(e, `#submenu-item-${id}`)}>{title}</h2>
                    {submenu && (
                        <ul className="overlay-megamenu-sub">
                            {submenu?.map((nav) => (
                                <li key={nav.id} className="overlay-megamenu-sub-item">
                                    <Anchor
                                        path={nav.link}
                                        className={clsx("overlay-megamenu-sub-link overlay-link", className)}
                                    >
                                        {nav.text}
                                    </Anchor>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}

Megamenu.propTypes = {
    className: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.shape({})),
    onClickHandler: PropTypes.func,
}

export default Megamenu