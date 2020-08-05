import React, {useEffect} from 'react'
import styles from './Header.module.css'
import * as identity from '../../asssts/img/Screen Shot 1942-05-13 at 5.57.27 PM.png'
import * as ResNet34 from '../../asssts/img/ResNet 34.png'
import * as ResNet50 from '../../asssts/img/ResNet 50.png'
import * as ResNet101 from '../../asssts/img/ResNet 101.png'
import * as ResNet152 from '../../asssts/img/ResNet 152.png'

function Resnet() {

    useEffect(()=> {
        document.title = `Image Classification | Resnet`;
    })

    return(
        <div className={`${styles.head_container}`}>
            <div className={styles.head_row}>
                <h1>Deep Residual Network</h1>
                <p>Deep Residual Network is almost similar to the networks which have convolution, pooling, activation and fully-connected layers stacked one over the other. The only construction to the simple network to make it a residual network is the identity connection between the layers. The Figure shows the residual block used in the network.</p>
                <img src={identity} alt="Resnet" />
                <p>{`Instead of learning a direct mapping of x ->y with a function H(x) (A few stacked non-linear layers). Let's  use the residual function using F(x) = H(x) - x, which can be reframed into H(x) = F(x)+x, where F(x) and x represents the stacked non-linear layers and the identity function(input=output) respectively.
 Hypothesis says  that it is easy to optimize the residual mapping function F(x) than to optimize the original, unreferenced mapping H(x).`}</p>
                <p>If the identity mapping is optimal, We can easily push the residuals to zero (F(x) = 0) than to fit an identity mapping (x, input=output) by a stack of non-linear layers. In simple language it is very easy to come up with a solution like F(x) =0 rather than F(x)=x using stack of non-linear convolution neural network layers as function.</p>
                <div className={styles.resnets}>
                <div className={styles.resnet}>
                        <h1>ResNet 34</h1>
                        <p>ResNet 34 is a convolutional neural network that is 34 layers deep.</p>
                        <img src={ResNet34} />
                    </div>
                    <div className={styles.resnet}>
                        <h1>ResNet 50</h1>
                        <p>ResNet 50 is a convolutional neural network that is 50 layers deep.</p>
                        <img src={ResNet50} />
                    </div>
                    <div className={styles.resnet}>
                        <h1>ResNet 101</h1>
                        <p>ResNet 101 is a convolutional neural network that is 101 layers deep.</p>
                        <img src={ResNet101} />
                    </div>
                    <div className={styles.resnet}>
                        <h1>ResNet 152</h1>
                        <p>ResNet 152 is a convolutional neural network that is 152 layers deep.</p>
                        <img src={ResNet152} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resnet;