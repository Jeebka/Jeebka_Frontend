import AddCard from "../components/Commons/PopUp/AddPopUp/AddCard";

export default function Playground(){
    return (
        <div style={{width: '100vw', height: '100vh', display: "flex", justifyContent: "center", alignItems:"center"}}>

            <AddCard isForLink={false}></AddCard>
        </div>
    )
}