import PropTypes from "prop-types"
import Link from "next/link";

const Anchor = ({
    path,
    children,
    className,
    rel,
    target,
    onClick,
    ...rest
}) => {
    if (!path) return null;
    const internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        const isHash = path.startsWith("#");
        if (isHash) {
            return (
                <a
                    className={className}
                    href={path}
                    onClick={onClick}
                    {...rest}
                >
                    {children}
                </a>
            );
        }
        return (
            <a
                rel={rel}
                className={className}
                href={path}
                target={target}
                onClick={onClick}
                {...rest}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={path} className={className} onClick={onClick} {...rest}>
            {children}
        </Link>
    );
};

Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

Anchor.propTypes = {
    path: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    rel: PropTypes.string,
    target: PropTypes.string
}

Anchor.displayName = "Anchor";

export default Anchor;