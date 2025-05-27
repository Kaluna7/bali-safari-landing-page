
interface MyProps{
    label : string;
    description : string;
    img : string;
    onChange : () => void;
    btnName : string;

}


export default function GridViewFeatures({img ,label,description,onChange,btnName} : MyProps){
    return(
        <div className="h-100 w-100 border bg-blue-300">
            <img src={img} alt="image"/>
            <h1>{label}</h1>
            <p>{description}</p>
            <button className="bg-black text-white" onClick={onChange}>{btnName}</button>
        </div>
    );
}