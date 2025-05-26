
interface MyProps{
    label : string;
}

export default function WhiteBtn({label}:MyProps ){
    return(
        <button className="bg-white text-black p-10 rounded-4xl">{label}</button>
    );
}