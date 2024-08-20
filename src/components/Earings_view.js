import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Earings_view.css';
import earings1 from '../Assets/earings1.png';
import earings2 from '../Assets/earings2.png';
import earings3 from '../Assets/earings3.png';
import earings4 from '../Assets/earings4.png';
import girl4 from '../Assets/girl4.png';
import { Grid, Box } from '@mui/material';
function Earings_view() {


    useEffect(() => {
        // Create a GSAP timeline
        const timeline = gsap.timeline({
            repeat: -1, // Set to -1 for infinite repetition
            repeatDelay: 1 // Optional: Add a delay between each complete cycle
        });

        // First animation sequence
        timeline
            .to('#earings1', {
                x: 700,
                y: 100,
                duration: 1
            })
            .to('#earings1', {
                y: 100,
                scale: 2,
                width: '10%',
                duration: 1,
                ease: 'back.inOut',
                onStart: () => {
                    // Rotate other earrings in sync
                    gsap.to(['#earings2', '#earings3', '#earings4'], {
                        rotation: 360,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            })
            .to('#earings1', {
                x: 0,
                y: 0,
                scale: 1,
                width: '70%',
                duration: 1,
                ease: 'back.inOut',
                delay: 1.5, // Wait for 2 seconds
                onComplete: () => {
                    // Rotate other earrings back
                    gsap.to(['#earings2', '#earings3', '#earings4'], {
                        rotation: 0,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            });

        // Second animation sequence
        timeline
            .to('#earings2', {
                x: 500,
                y: 200,
                duration: 1
            })
            .to('#earings2', {
                y: 100,
                scale: 2,
                width: '10%',
                duration: 1,
                ease: 'back.inOut',
                onStart: () => {
                    gsap.to(['#earings1', '#earings3', '#earings4'], {
                        rotation: 360,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            })
            .to('#earings2', {
                x: 0,
                y: 0,
                scale: 1,
                width: '70%',
                duration: 1,
                ease: 'back.inOut',
                delay: 1.5,
                onComplete: () => {
                    gsap.to(['#earings1', '#earings3', '#earings4'], {
                        rotation: 0,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            });

        // Third animation sequence
        timeline
            .to('#earings3', {
                x: 700,
                y: 100,
                duration: 1
            })
            .to('#earings3', {
                y: -185,
                scale: 2,
                width: '10%',
                duration: 1,
                ease: 'back.inOut',
                onStart: () => {
                    gsap.to(['#earings1', '#earings2', '#earings4'], {
                        rotation: 360,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            })
            .to('#earings3', {
                x: 0,
                y: 0,
                scale: 1,
                width: '70%',
                duration: 1,
                ease: 'back.inOut',
                delay: 1.5,
                onComplete: () => {
                    gsap.to(['#earings1', '#earings2', '#earings4'], {
                        rotation: 0,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            });

        // Fourth animation sequence
        timeline
            .to('#earings4', {
                x: 500,
                y: 100,
                duration: 1
            })
            .to('#earings4', {
                y: -185,
                scale: 2,
                width: '10%',
                duration: 1,
                ease: 'back.inOut',
                onStart: () => {
                    gsap.to(['#earings1', '#earings2', '#earings3'], {
                        rotation: 360,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            })
            .to('#earings4', {
                x: 0,
                y: 0,
                scale: 1,
                width: '70%',
                duration: 1,
                ease: 'back.inOut',
                delay: 1.5,
                onComplete: () => {
                    gsap.to(['#earings1', '#earings2', '#earings3'], {
                        rotation: 0,
                        duration: 1,
                        ease: 'back.inOut',
                        overwrite: 'auto'
                    });
                }
            });

    }, []);


    return (
        <div className="four">
            <div className="left-four">
                <div className="card-row">
                    <div className="card1">
                        <img id='earings1' style={{ width: '70%' }} src={earings1} alt="Fanta" />
                    </div>
                    <div className="card1">
                        <img id='earings2' style={{ width: '70%' }} src={earings2} alt="Fanta" />
                    </div>
                </div>
                <div className="card-row">
                    <div className="card1">
                        <img id='earings3' style={{ width: '70%' }} src={earings3} alt="Fanta" />
                    </div>
                    <div className="card1">
                        <img id='earings4' style={{ width: '70%' }} src={earings4} alt="Fanta" />
                    </div>
                </div>
            </div>
            <div className="right-four">
                <img src={girl4} alt="Girl" />
            </div>
        </div>
    );
}

export default Earings_view;
