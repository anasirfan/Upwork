import { useSelector } from "react-redux";
import { NavBar, Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderSix } from "../../components/HeroSlider";
import { CategoryGridFour } from "../../components/Category";
import { getProducts } from "../../lib/product";
import { BlogPostSlider } from "../../components/Blog";
import { SectionTitleOne } from "../../components/SectionTitle";
import { ImageCtaThree } from "../../components/Cta";
import { CountdownTimerThree } from "../../components/Countdown";
import{ MMnavigate} from "../../components/Header"
import { ProductSliderOne } from "../../components/ProductSlider";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-six.json";
import { useMediaQuery } from 'react-responsive'
import {
    IoIosSearch,
    IoMdPerson,
    IoIosHeartEmpty,
    IoIosCart,
    IoIosMenu
  } from "react-icons/io";
import ProductForm from "../../components/ProductDetails/ProductForm";


const SmartDesign = () => {
    const { products } = useSelector((state) => state.product);
    const popularProducts = getProducts(products, "furniture", "popular", 8);

    // const isMobile = useMediaQuery({
    //     query: '(max-width: 1224px)'
    //   })
    
    return (

        
        <LayoutTwo aboutOverlay={false}>

            
            {/* hero slider */}
            <HeroSliderSix sliderData={heroSliderData} />
            <div className="space-mb--r100"></div>
           

            {/* category grid */}
            <div className="section-title-container">
                <Container>
                    <Row>

                    
                        <div className="col-lg-12">
                            <SectionTitleOne title="Clever & unique ideas" />
                        </div>
                    </Row>
                </Container>
            </div>
          
             {/* {isMobile &&  <MMnavigate/>} */}

            

            <CategoryGridFour spaceBottomClass="space-mb--r100" />

            {/* countdown */}
            <CountdownTimerThree
                title="Deal of the day"
                image="/assets/images/countdown/countdown-3.jpg"
                dateTime="July 07, 2023 12:12:00"
                url="/shop/left-sidebar"
                buttonText="Only $39"
                spaceBottomClass="space-mb--r100"
                containerType="normal"
            />

            {/* product slider */}
            <ProductSliderOne products={popularProducts} />

            <ProductForm products={products} />

            {/* image cta */}
            <ImageCtaThree spaceBottomClass="space-mb--r100" />

            {/* blog post slider */}
            <BlogPostSlider blogData={blogData} spaceBottomClass="space-mb--r100" />
            
            
        </LayoutTwo>
       
    ); 
};


export default SmartDesign;