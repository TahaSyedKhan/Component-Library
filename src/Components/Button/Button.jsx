import classNames from 'classnames';
import "./style.css"
export default function Button({ size, variant, children, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`

    const allClasses = classNames(sizeClass, variantClass)
    return (
        <button 
            className={allClasses} {...rest}>
            {children}
        </button>
    )
}