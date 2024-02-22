import LogoProps from "../types/LogoProps"
import logo from "../assets/logo.png"

const Logo = ({ height, width }: LogoProps) => {
    const h  = `${height}`
    const w  = `${width}`

    return (
        <img
            className={`m-2 rounded-full object-cover`}
            width={w}
            height={h}
            src={logo}
        />
    )
}

export default Logo
