import { ReactNode } from "react"

export default function CardContent({
    children
}:{
    children: ReactNode;
}) {
    return (
        <div className="p-6 border border-gray-200 rounded-md items-center text-gray-500 font-medium">
            
            {children} 

        </div>
    )
}