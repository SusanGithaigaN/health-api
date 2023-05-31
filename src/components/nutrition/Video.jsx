import React from 'react';

export default function Video() {
    return (
        <div
        className="d-flex justify-content-center align-items-center"
        // style={{ height: '100vh' }}
      >
        <div className="ratio ratio-16x9" style={{ maxWidth: '1000px' }}>
          <iframe
            src="https://www.youtube.com/embed/Q4yUlJV31Rk" 
            title="How to make healthy eating unbelievably easy | Luke Durward | TEDxYorkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ width: '90%', height: '90%' }}
            allowFullScreen
          ></iframe>
          {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/Q4yUlJV31Rk" title="How to make healthy eating unbelievably easy | Luke Durward | TEDxYorkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
      </div>
    );
}