import {useEffect} from 'react'
function Hero({title, description,...rest}) {
  
    return(
        <div className="hero-region-background">
        <div className="hero_region">
          <div className="hero_region_header">{title}</div>
          
          <div className="hero_region_header-two">
           {rest.subtitle}
          </div>
          <div>
            <a href="" className="btn solid-btn hero-btn">{rest.ctaText}</a>
          </div>
          <div className="hero_region_header-three">
            {rest.ctaSubText}
          </div>
        </div>
      </div>
    )
    
}

export default Hero;