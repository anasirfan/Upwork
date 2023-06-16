import { Row, Col } from "react-bootstrap";
import { IoIosCalendar, IoIosAdd } from "react-icons/io";
import Anchor from "../anchor";

const BlogPostGridWrapper = ({ column }) => {
  return (
    <Row>
      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                Chic Fashion Phenomenon
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>

      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail-6.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                Shirt Color Picking Guide
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>

      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail-2-1.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                Perfect Perfume & Cologne
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-left-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>

      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                T-Shirts as Minimalist Style
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>
      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                Chic Fashion Phenomenon
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>

      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail-6.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                Shirt Color Picking Guide
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>

      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail-2-1.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                Perfect Perfume & Cologne
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>

      <Col
        lg={column && column === 2 ? 6 : column === 3 ? 4 : 12}
        md={column && column === 2 ? 6 : column === 3 ? 6 : 12}
        className="space-mb--60"
      >
        <div className="blog-grid-post">
          <div className="blog-grid-post__image space-mb--30">
            <Anchor path="/blog/post-right-sidebar">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/blog/post-thumbnail.png"
                  }
                  className="img-fluid"
                  alt=""
                />
            </Anchor>
          </div>
          <div className="blog-grid-post__content">
            <div className="post-date">
              <IoIosCalendar />
              <Anchor path="/blog/post-right-sidebar">
                 june 5, 2020
              </Anchor>
            </div>
            <h2 className="post-title">
              <Anchor path="/blog/post-right-sidebar">
                T-Shirts as Minimalist Style
              </Anchor>
            </h2>
            <p className="post-excerpt">
              Michele seemed to say, was the 21st-century Gucci girl, an
              eccentric, fresh-faced weirdo who wasn’t afraid to wear backless
              fur-lined loafers, to personify the idea of “ugly pretty.”
            </p>
            <Anchor path="/blog/post-right-sidebar" className="blog-readmore-btn">
                <IoIosAdd /> read more
            </Anchor>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BlogPostGridWrapper;
