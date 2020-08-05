import React  from 'react'
import styles from './ImgList.module.css'
import Button from '@material-ui/core/Button'
import ImgListItem from './ImgListItem'

function ImgList(props) {
    console.log(props.data)
    return (
            <div className={`${styles.container} ${styles.sticky}`}>
                <div className={styles.row}>
                    {
                        props.data.map((val,ie) => (
                                            <ImgListItem key = {ie} imgSrc = {val} />
                                    ))
                    }    
                </div> 
                <div className={styles.row}>
                    <Button size= "large" variant="outlined" color="primary" onClick={() => props.cancel()} className={styles.cancel} > Cancel </Button>
                </div>   
            </div>
    );
}
export default ImgList;