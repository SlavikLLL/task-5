import React from 'react'
import Body from './Body'
import Title from './Title'


class Card extends React.Component{
   static Body = Body;
   static Title = Title;
   render(){
       return(
          <div className='card card-block'>{this.props.children}</div>
       )
   }
}
export default Card