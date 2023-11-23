import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state ={
          count : 0
        }
      }
      increaseC=()=>{
        if(this.state.count < 2){
          this.setState({count:this.state.count+1})
        }else{
            this.setState({count:0})
        }
      }
      decrementC=()=>{
        if(this.state.count > 0){
          this.setState({count:this.state.count-=1})
        }else{
            this.setState({count:2})
        }
      }
      render() {
        return (
          <div className="mainBody">
            <div onClick={this.increaseC}>
              <div className="backward">
                <ArrowBackIosIcon/>
              </div>
            </div>                      
                <div className="title">
                    {images[this.state.count].title}
                </div>                
                <img src={images[this.state.count].img} alt="" />
                <div className="footer">
                    {images[this.state.count].subtitle}
                </div>         
            <div onClick={this.decrementC}>
              <div className="forward">
                  <ArrowForwardIosIcon/>
              </div>
            </div>
          </div>
        );
    }    
}

export default Carousel;