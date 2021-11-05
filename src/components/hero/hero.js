function Hero(data) {
  const {title, description,...rest} = data;
    return(
        <div className="hero-region-background">
        <div className="hero_region">
          <div className="hero_region_header">{title}</div>
          
          <div className="hero_region_header-two">
            Read or listen anytime, anywhere.
          </div>
          <div>
            <a href="" className="btn solid-btn hero-btn">Read free for 30 days</a>
          </div>
          <div className="hero_region_header-three">
            Only ₹299/month after. Cancel anytime.
          </div>
        </div>
      </div>
    )
    
}

export default Hero;