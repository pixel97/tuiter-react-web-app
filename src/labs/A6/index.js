import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list.js";

function Assignment6() {
 const color = 'blue';
  const dangerous = true;
 return (
   <div>
     <h2>Assignment 6</h2>
       <ConditionalOutput/>
       <TodoList/>
     <Styles/>
     <Classes/>
   </div>
 );
}
export default Assignment6;