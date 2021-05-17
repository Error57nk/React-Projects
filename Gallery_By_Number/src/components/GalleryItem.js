import React from 'react'

function GalleryItem({pdata}) {
  return (
    <div className="gallery-item" onClick={()=>{window.open(pdata['url'])}}>
      <h2>{pdata['id']}</h2>
      <p>{pdata['title']}</p>
      <img src={pdata['thumbnailUrl']} loading="lazy" alt="Picture" />
    </div>
  )
}

export default GalleryItem
