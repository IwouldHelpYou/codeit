import HandIcon from "./HandIcon";

function handleClick(){
    alert('hi');

}

const value=0;

function HandButton(value) {

    return <>
    <h1>여기가 HandButton</h1>
    <button onClick={handleClick}>
        <HandIcon value={value}/>
    </button>
    </>
}

export default HandButton;