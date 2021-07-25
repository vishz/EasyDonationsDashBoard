import React,{Component} from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './react-slick.scss'
import './style.scss'
class App extends Component{
    render() {
        let  settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: this.props.autoplay,
            speed: 500,
            // autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    {
                        this.props.list.length !== 0 ?
                            this.props.list.map((element, index) => {
                                return <div key={index}>
                                    <div className={"slideshow-wrapper"}>
                                        <div className={"display-inline slideshow-user-wrapper"}>
                                            <img src={element.imgUrl} alt={"."} className={"slideshow-pro-image"}/>
                                            <div>
                                                <p className={"slideshow-pro-name"}>{element.name}</p>
                                                <p className={"slideshow-pro-category"}>{element.description}</p>
                                            </div>
                                        </div>
                                        <div className={"align-center slideshow-bottom-wrapper"}>

                                        </div>
                                    </div>
                                </div>
                            }) : null
                    }
                </Slider>
            </div>
        );
    }
}
export default App;
