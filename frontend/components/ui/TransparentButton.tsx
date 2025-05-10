import { ReactNode } from "react"

export default function TransParentButton({
    children,
    onClick,
}:{
    children: ReactNode;
    onClick: () => void;
}) {
    return(
        <div className={`bg-white hover:bg-gray-100 border border-gray-200 cursor-pointer text-black text-sm font-semibold py-3 px-6 rounded-md`} onClick={onClick}>
            
            {children}



        </div>
    )
}