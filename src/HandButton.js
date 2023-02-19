import HandIcon from "./HandIcon";
import Button from "./Button";
import Button_children from "./Button_children";
import Dice from "./Dice";
// function handleClick(){
//     alert('hi');
// }

function HandButton({value,onClick}) {
    const pae=['rock','scissor','paper']

    const handleClick = () => alert(pae[value])
    // cost handleClick() = { onClick(value) }

    return (
    <>
    <button onClick={handleClick}>
        {/* text 왜넣었는지는 나도 모름 */}
        <HandIcon text="주사위" value={value}/> 
    </button>
    </>
    )
}
  
export default HandButton;

