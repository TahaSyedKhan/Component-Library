import { IoPersonSharp } from "react-icons/io5"
import "./style.css"

const colorClasses = ['navy', 'pink', 'red', 'blue', 'green']
const randomColor = Math.floor(Math.random() * colorClasses.length)
const randomColorClass = colorClasses[randomColor]

export default function Avatar({src, alt, children}) {
    function renderAvatarDivs() {
        if(src) {
            return (
                <div className="avatar">
                    <img src={src} alt={alt} />
                </div>
            )
        }
        if(children) {
            return (
                <div className={`avatar avatar-letters ${randomColorClass}`}>
                    {children}
                </div>
            )
        } else {
            return (
                <div className={`avatar avatar-icons ${randomColorClass}`}>
                    <IoPersonSharp />
                </div>
            )
        }
    }
    return (
        <>
            {renderAvatarDivs()}
        </>
    )
}