import { ReactNode } from "react"

export default function Button({
    children,
    onClick,
}:{
    children: ReactNode;
    onClick: () => void;
}) {
    return(
        <div className={`bg-pink-600 hover:bg-pink-700 cursor-pointer text-white text-sm font-semibold py-3 px-6 rounded-md`} onClick={onClick}>
            {children}
            
        </div>

    )
}