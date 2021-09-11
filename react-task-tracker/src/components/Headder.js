import Button from "./Button"



const Headder = ({onAdd, showAddTask, onPrint}) => {

    return (
        <header className= "header">
           <h1>Task Tracker</h1> 
           <Button  onClick={onAdd} color={showAddTask?"red":"green"} text={showAddTask?"Close":"Add"} />
           <Button onClick={onPrint} color={"blue"} text={"Show all"}/>
        </header>
    )
}

export default Headder
