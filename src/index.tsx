import { Renderer, render } from "react-dom"
import FirstComponent from "./components/FirstComponent"
type Props = {}

render ( 
  <FirstComponent />,
  document.getElementById('root')
)