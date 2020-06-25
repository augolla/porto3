import React,{Component} from 'react'

class ShapeI extends Component {
  constructor() {
    super()

  }
  componentDidMount(){
    const shape=this.refs.shape
    const ctx=shape.getContext("2d")

    ctx.fillStyle='red'
    ctx.fillRect(60,40,24,24)
  }
  render(){
    return(
      <canvas ref='shape'></canvas>
    )
  }
}

export default ShapeI
