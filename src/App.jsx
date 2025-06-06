//import statements
//curly brackets because the variable episode list is NOT a default export
import { episodeList } from "./data";
import React, {useState} from "react";
export default function App() {
  // vvariables and javascript logic
  //return(JSX and Javascript)
  //im not sure 100% what the above comments are referring to.
  //so heres my best attempt reasoning out what I need to do and lets see how far I can get with this
  //we are creating a ul with li buttons appended to it similar to the previous few assignments but in react.
  //this negates the need for create elements or inner htmls.
  //addressing bullet points below:
  //1. app has imported the array from the import statement on line 3
  //2. I need to store this imported variable in a state variable (is this different than creating a variable in js? {}?)
  //2 cont. I need to use the useState from react. Not above.
  //state(?) imported in line 4?
   useState(0) = episodeList

  //3.I can use the episode.id from each individual episode object in episodeList to assign a unique key to every li in the rendered list
  <ul>
    {episodeList.map((episode) => (
      <li key={episode.id}>{episode}</li>
    ))}
  </ul>
  //4. use a set command. I can use the same method I used for puppy bowl to render the list on button click.  go find that code.
  //did i not just do this in 3?  google is running me down some rabbit holes.
  //5. I can have a default message in the section for episode details that prompts the user to select an episode.
  //6. see 4
  //7. this is where im a bit lost on how it wants me to achieve this.  what am i allowed to use and how in react vs js.  where/what the syntax.
  //8. 2 columns.  done with grid in css.
}
