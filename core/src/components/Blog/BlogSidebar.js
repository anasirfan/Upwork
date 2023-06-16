import { IoIosSearch } from "react-icons/io";
import Anchor from "../anchor";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="single-sidebar-widget space-mb--40">
        <div className="search-widget">
          <form>
            <input type="search" placeholder="Search products ..." />
            <button type="button">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Categories
        </h2>
        <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
          <li>
            <Anchor path="/blog/standard-left-sidebar">
              Fashion
            </Anchor>
          </li>
          <li>
            <Anchor path="/blog/standard-left-sidebar">
              Furniture
            </Anchor>
          </li>
          <li>
            <Anchor path="/blog/standard-left-sidebar">
              Accessories
            </Anchor>
          </li>
          <li>
            <Anchor path="/blog/standard-left-sidebar">
              Wearables
            </Anchor>
          </li>
          <li>
            <Anchor path="/blog/standard-left-sidebar">
              Decor
            </Anchor>
          </li>
        </ul>
      </div>

      <div className="single-sidebar-widget space-mb--40">
        <div className="widget-post-wrapper">
          <div className="single-widget-post">
            <div className="image">
              <Anchor path="/blog/post-left-sidebar">
                
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/blog/post-thumbnail-100x120.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                
              </Anchor>
            </div>
            <div className="content">
              <h3 className="widget-post-title">
                <Anchor path="/blog/post-left-sidebar">
                  Chic Fashion Phenomenon
                </Anchor>
              </h3>
              <p className="widget-post-date">June 5, 2020</p>
            </div>
          </div>

          <div className="single-widget-post">
            <div className="image">
              <Anchor path="/blog/post-left-sidebar">
                
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/blog/post-thumbnail-6-100x120.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                
              </Anchor>
            </div>
            <div className="content">
              <h3 className="widget-post-title">
                <Anchor path="/blog/post-left-sidebar">
                  Go Your Own Way
                </Anchor>
              </h3>
              <p className="widget-post-date">June 5, 2020</p>
            </div>
          </div>

          <div className="single-widget-post">
            <div className="image">
              <Anchor path="/blog/post-left-sidebar">
                
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/blog/post-thumbnail-9-100x120.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                
              </Anchor>
            </div>
            <div className="content">
              <h3 className="widget-post-title">
                <Anchor path="/blog/post-left-sidebar">
                  Home-made Body Lotion
                </Anchor>
              </h3>
              <p className="widget-post-date">June 5, 2020</p>
            </div>
          </div>
        </div>
      </div>

      <div className="single-sidebar-widget space-mb--40">
        <div className="blog-sidebar-banner">
          <Anchor path="/shop/left-sidebar">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/banners/blog-sidebar.png"
                }
                className="img-fluid"
                alt=""
              />
          </Anchor>
        </div>
      </div>

      {/* <div className="single-sidebar-widget">
        <h2 className="single-sidebar-widget__title space-mb--30">
          {" "}
          Popular Tags
        </h2>
        <div className="tag-container">
          <Anchor path="/blog/standard-left-sidebar">
            bags
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            chair
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            clock
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            cosmetic
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            fashion
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            furniture
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            holder
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            mask
          </Anchor>
          <Anchor path="/blog/standard-left-sidebar">
            men
          </Anchor>
        </div>
      </div> */}
    </div>
  );
};

export default BlogSidebar;
