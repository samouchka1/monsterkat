import React from 'react'

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0" style={{maskImage: 'linear-gradient(180deg, black 50%, black 100%)'}}>
        <div className="bg-[url('/album_cover.png')] bg-cover bg-center w-full h-full blur-sm brightness-[.38]"></div>
    </div>
  )
}

export default Background