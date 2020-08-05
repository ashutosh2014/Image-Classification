import React  from 'react'
import styles from './SelectImg.module.css'
import * as demo from '../../../asssts/img/demo.mp4'

class SelectImg extends React.Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()
     }
    handleUpload = (e) => {
        this.props.addImages(e.target.files)
    }
    IdentifyHandle = () => this.inputRef.current.click();

    render() {
        return (
            <div className={`${styles.container}`}>
                <div className={styles.row}>
                    <video className={styles.demo} loop={true} autoPlay={true} src={demo}></video>
                </div>
                <div className={styles.row}>
                    <div className={styles.main_content}>
                        <h1>
                            Select Images to Classify or Identify
                        </h1>
                        <input  
                            className={styles.img} 
                            type="file"
                            accept="image/*"
                            capture="camera"
                            onChange={this.handleUpload}
                            ref={this.inputRef}
                            multiple/> 
                        <button className={styles.identify} onClick ={this.IdentifyHandle}>Identify</button>
                    </div>
                </div>    
            </div>
        );
    }
}

// function SelectImg() {
//     const inputRef = useRef();
//     const IdentifyHandle = () => {
//         upload()
//     }
//     const upload = () => inputRef.current.click();
//     return(
//         <div className={`${styles.container} ${styles.sticky}`}>
//             <div className={styles.row}>
//                 <div className={styles.main_content}>
//                     <h1>
//                         Select Images to Classify or Identify
//                     </h1>
//                     <input  className={styles.img} type="file" id="test" ref={inputRef}/>
//                     <button className={styles.identify} onClick ={IdentifyHandle}>Identify</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default SelectImg;