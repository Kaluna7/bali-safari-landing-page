import type React from "react";

interface MyProps{
    label : string;
    description : string;
    img : string;
    children? : React.ReactNode;
}


export default function GridViewFeatures({img ,label,description,children} : MyProps){
    return(
        <div className="flex flex-col h-250 w-250 border bg-blue-300 gap-2 rounded-4xl text-[34px] relative">
            <img src={img} alt="image" className="max-w-full h-auto rounded-t-4xl"/>
            <div className="text-left p-6 flex flex-col items-start gap-4">
            <h1 className="text-[40px] font-bold">{label}</h1>
            <p>{description}</p>
            <div className="absolute margin-20 bottom-10">
                {children}
            </div>
            </div>
        </div>
    );
}