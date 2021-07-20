import React, { useState, useCallback }  from 'react'
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import ap1 from '../images/ap1.png';
import a from '../images/galleria/a.jpg';

function Gallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/b/b0/Krishna_tells_Gita_to_Arjuna.jpg',
        'http://placeimg.com/1200/800/nature',
        'http://placeimg.com/800/1200/nature',
        'http://placeimg.com/1920/1080/nature',
        'http://placeimg.com/1500/500/nature'
    ];
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <div className="container">
            {/* <div style={{width: '300px',height: '300px', border: '1px solid black'}}>
                <img style={{display:'block', width: '100%', height: '300px'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
                <br /><br /><br />
                <div style={{width: '100%', height: '10px', "background-color": 'white'}}>House Program</div>
            </div> */}
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            <img style={{display:'block'}} className="col-md-3 col-sm-6 galbutton" src={ap1} onClick={ () => openImageViewer() } />
            {isViewerOpen && (
                <ImageViewer
                src={ images }
                currentIndex={ currentImage }
                onClose={ closeImageViewer }
                />
            )}
        </div>
    )

}

export default Gallery;