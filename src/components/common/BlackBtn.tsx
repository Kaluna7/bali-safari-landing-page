
interface MyProps{
    label : string;
}

export default function BlackBtn({label}:MyProps ) {
    return(
        <button className="bg-black text-white p-10 rounded-4xl">{label}</button>
    );
}