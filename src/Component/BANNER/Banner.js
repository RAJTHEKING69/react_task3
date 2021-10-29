import styles from './banner.module.css'

function Banner() {
    return (
        <div >
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.achieversit.com/assets/images/react_training.jpg" className="d-block w-100" alt="react-development"/>
    </div>
    <div className="carousel-caption  d-md-block">
    				<h1 className={styles.heads}>REACTJS DEVELOPMENT COURSE</h1>
    				
    			</div>
    </div>
  </div>
</div>
            
       
    )
}

export default Banner
