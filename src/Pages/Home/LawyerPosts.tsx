
import ReviewProps from '../../Components/global/ReviewProps'
import img from "../../assets/medium.png";
import boxImg from "../../assets/image1.png";

const LawyerPosts = () => {
  return (
    <div>
            <ReviewProps
              avatar={img}
              boxImg={boxImg}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    </div>
  )
}

export default LawyerPosts