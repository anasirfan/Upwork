import { useEffect , useState} from 'react';
import { LayoutOne } from '../components/Layout';
import { HeroSliderOne } from '../components/HeroSlider';
import { ProductTab } from '../components/ProductTab';
import { ImageCta } from '../components/Cta';
import heroSliderData from '../data/hero-sliders/hero-slider-one.json';
import imageCtaData from '../data/image-cta/image-cta-one.json';
import { recursiveCatalog, fetchAllCollections, fetchAllCategories,fetchProductsByType  } from '../services/product.services';



const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const fetchedProducts = await recursiveCatalog();
    const fetchedCollections = await fetchAllCollections();
    const fetchedCategories = await fetchAllCategories();
    const productsByCategory = await fetchProductsByType('clothing');
  console.log(productsByCategory);

  
    // Filter the products based on your criteria
    const newProducts = fetchedProducts.slice(0, 12);
    const popularProducts = fetchedProducts.slice(12, 26);
    const saleProducts = fetchedProducts.slice(26, 40);
  
    // console.log("Fetched Products:", fetchedProducts);
    // console.log("Fetched Collections:", fetchedCollections);
    // console.log("Fetched Categories:", fetchedCategories);
    // console.log("New Products:", newProducts);
    // console.log("Popular Products:", popularProducts);
    // console.log("Sale Products:", saleProducts);
  
    setNewProducts(newProducts);
    setPopularProducts(popularProducts);
    setSaleProducts(saleProducts);
  }



  

  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* product tab */}
      <ProductTab
  newProducts={newProducts}
  popularProducts={popularProducts}
  saleProducts={saleProducts}
/>

      {/* image cta */}
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      />
    </LayoutOne>
  );
};

export default Home;
