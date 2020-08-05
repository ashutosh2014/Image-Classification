import React, { Component } from 'react';
import SelectImg from './SelectImg/SelectImg';
import ImgList from './ImgList/ImgList'


class MainFile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data : [],
            showResult : false
        }
    }
    addImages = async (e) => {
        this.setState((prevState) =>({...prevState,showResult : true}))
        for(let i=0;i<e.length ; i++) {
            console.log(e[i])
            const url = URL.createObjectURL(e[i]);
            this.setState((prevState)=>({
                data : [...prevState.data , url],
            }),()=> {
                console.log(this.state)
            })
        }
    }
    handleCancel = () =>{
        this.setState(()=>({
            data :[],
            showResult : false
        }))
    }
    componentDidMount() {
        this.updateTitle()
      }
    componentDidUpdate() {
        this.updateTitle()
    }

    updateTitle = () => {
        if(!this.state.showResult) {
            document.title = `Image Classificatoin | Home`;
        }
        else {
            document.title = `Image Classificatoin | Identify`;
        }    
    }
    render() {  
        const { data , showResult } = this.state
        if(!showResult) {
            return <SelectImg addImages = {this.addImages}/>
        }
        if(showResult) {
            return (<ImgList cancel={this.handleCancel} data = {data}/>)
        }
    }
}

export default MainFile;