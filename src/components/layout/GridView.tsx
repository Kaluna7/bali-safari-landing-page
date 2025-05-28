import type React from "react";

interface MyProps{
    label : string;
    description : string;
    img : string;
    children? : React.ReactNode;
}


export default function GridViewFeatures({img ,label,description,children} : MyProps){
    return(
        <div className="flex flex-col h-100 w-100 border bg-blue-300 gap-4">
            <img src={img} alt="image" className="max-w-full h-auto"/>
            <div className="text-left p-2 flex flex-col items-start gap-4">
            <h1>{label}</h1>
            <p>{description}</p>
            {children}
            </div>
        </div>
    );
}