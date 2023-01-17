import Bounce from 'react-reveal/Bounce'
import { Provider } from '@lyket/react'
import { LikeButton } from '@lyket/react'

export default function Like(){
  return(
    <div className="text-center rounded " style={{backgroundColor:"",width:"80%",margin:"auto"}}>
    <Bounce count={3}>  <h2 className="pt-5 text-black" style={{letterSpacing:"1px"}}>Do You <span style={{color:"red"}}>Like</span> This Design !</h2></Bounce>
      <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa"
      theme={
        {
          colors:{
                  text:"red",
                         }
        }
      }
       >
      <LikeButton 
      namespace="hello"
      id="like"
      component={LikeButton.templates.Twitter}
     hideCounterIfLessThan={0}
     />     
        </Provider>
    </div>
  )
}
