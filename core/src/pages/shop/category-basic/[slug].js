import { useEffect,useState } from "react";
import { Container } from "react-bootstrap";
import { LayoutTwo } from "../../../components/Layout";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {ProductGrid, ProductGridWrapper} from "../../../components/ProductThumb";
import { fetchProductsByType, fetchAllCategories } from "../../../services/product.services";
import  slugify  from "slugify";
import ProductGridList from "../../../components/ProductThumb/ProductGridList";

const CategoryBasic = ({ category }) => {
   
  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  }, []);



  console.log(category)
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={category[0].productType} />

      {/* category products */}
      <div className="product-grid-container space-mt--r100 space-mb--r100">
        <Container>
          {/* <h2 className="section-title">{category[0].productType}</h2> */}
          <ProductGridWrapper products={category.map((product) => product)} />
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default CategoryBasic;

export async function getStaticProps({ params }) {
    console.log(params.slug)
  const category = await fetchProductsByType(params.slug);

  return {
    props: {
      category
    },
  };
}

export async function getStaticPaths() {
  // Fetch all categories from the API
  const categories = await fetchAllCategories();

  // Get the paths we want to pre-render based on categories
  const paths = categories.map((category) => ({
    params: { slug: category  },
  }));

  return { paths, fallback: false };
}
