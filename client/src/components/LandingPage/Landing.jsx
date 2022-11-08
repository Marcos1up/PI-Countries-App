import React from "react";
import { Link } from 'react-router-dom';
import WorldVideo from '../../assets/ForLandingPage.mp4';
import styles from './landing.module.css';

function LandingPage() {
    return(
        <div className = { styles.main }>
            <div className = { styles.overlay }></div>
            <video src={ WorldVideo } autoPlay loop muted />
            <div className = { styles.content }>
                <h1 className = { styles.h1 }>Henry's Countries</h1>
                <Link to = '/home'>
                    <button className = { styles.button }>HOME</button>
                </Link>        
            </div>
        </div>
    );
};

export default LandingPage;