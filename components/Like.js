import Bounce from 'react-reveal/Bounce'
import { Provider } from '@lyket/react'
import { LikeButton } from '@lyket/react'
import './Like.css';
export default function Like(){
  return(
    <div className="text-center rounded " style={{backgroundColor:"",width:"80%",margin:"auto"}}>
    <Bounce count={3}>  <h2 className="pt-5 text-black" style={{letterSpacing:"1px"}}>Give Me a <span style={{color:"red"}}>Thumbs</span> Up ! </h2></Bounce>
      <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
      <LikeButton 
      namespace="hello"
      id="like"
      className="likebtn"
      />
      
        </Provider>
    </div>
  )
}
