import React, { useState, useRef, useEffect }  from 'react'
import styles from './ImgList.module.css'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
//import {setWasmPath} from '@tensorflow/tfjs-backend-wasm';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ImgListItem(props) {
    const [showBtn,setShowBtn] = useState(false)
    const [showLoading,setShowLoading] = useState(true)
    const [showResult,setShowResult] = useState(false)
    const [value,setValue] = useState('')
    const imageRef = useRef(null)
    const [error,setError] = useState(false)
    const [model, setModel] = useState(null);
    const [count,setCount] = useState(false)
    const [showError,setShowError] = useState(true)
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [disable,setDisable] = useState(true)
    
    const findResult =async  (pars) => {
        console.log(pars)
        if(pars.probability < 0.50) {
            console.log("dsd")
            throw new Error(`OOPS! Can't Predict`)
        }
        return pars.className
    }
    useEffect(()=>{
        async function start(){
        if(!count) {
            await loadModel().then(()=>{
              setDisable(false)
            }).catch(error =>{
                setOpen(true)
            })
            console.log("Model loaded")
            console.log(model)
            setShowLoading(false);
        }
        }
        start()
    },[model])


    const loadModel = async () => {

    await tf.setBackend('cpu').then( ref => {
        console.log('--------- tf.setBackend');
      }).catch(function(error) {
        console.log('Error tf.setBackend(): ', error);
      });   
      await tf.ready();
        const model2 = await mobilenet.load().then(response => {setModel(response);console.log(response)}).catch(error =>{ console.log(error);throw new Error("Model not Loaded")});
        console.log(model2)
        //setModel(model2);
        setCount(true)
    };
  
    const handlePredict = () =>{
        let res = []
        setShowBtn(true)
        setShowLoading(false)
        setDisable(true)
        async function classif() {
            return await model.classify(imageRef.current)
        }
        async function getResults() {
            await classif()
                    .then(resp =>{
                        res = resp[0]
                        })
                    .catch(error =>{setError(true)})
            await findResult(res)
                    .then(resp => {setShowLoading(false);console.log("ds");setValue(resp);setShowResult(true)})
                    .catch(error =>{setError(true);setOpen2(true)})
            setShowLoading(false);
            setShowBtn(true)
        }
        getResults()
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
        setOpen2(false);
    };
    return (
                    <div className={`${styles.root} ${styles.root_elevation} ${styles.root_rounded} ${styles.root_main}`}>
                        <div className={`${styles.card} ${styles.card_elevation} ${styles.card_rounded} ${styles.card_main}`}>
                            <div className = {`${styles.card_img}`}>
                                <img src={props.imgSrc} ref= {imageRef} />
                            </div>
                            <hr className = {styles.hr}/>
                            <div className={styles.footer}>
                                {showError && 
                                    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="error">
                                      Model isn't loaded. Please Cancel and Rety !!
                                    </Alert>
                                  </Snackbar>
                                }
                                {!showBtn && <Button 
                                    variant="contained"
                                    color="primary"
                                    className = {styles.btn_identify}
                                    disabled={disable}
                                    onClick={handlePredict} >
                                        Identify
                                    </Button>}
                                {showLoading &&  <CircularProgress className={styles.loader} size={24} />}
                                {showResult && <div className={styles.result_success}>{value}</div>}
                                {error && 
                                <div className={styles.result_error}>
                                    OOPS! Can't Predict
                                </div>} 
                                {error && <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="error">
                                      OOPS! Can't Predict 
                                    </Alert>
                                  </Snackbar>}

                            </div>
                        </div>
                    </div>
    );
}
export default ImgListItem;