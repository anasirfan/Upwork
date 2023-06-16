import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { TestimonialOne, TestimonialTwo } from "../../components/Testimonial";
import Anchor from "../../components/anchor";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import testimonialTwoData from "../../data/testimonials/testimonial-two.json";

const Testimonials = () => {
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Testimonials"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Testimonials</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mb--r130">
        {/* testimonial */}
        <TestimonialOne testimonialData={testimonialOneData} />

        <TestimonialTwo
          testimonialData={testimonialTwoData}
          backgroundImage="/assets/images/backgrounds/testimonials-bg.png"
        />
      </div>
    </LayoutTwo>
  );
};

export default Testimonials;
