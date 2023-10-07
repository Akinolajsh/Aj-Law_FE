import moment from "moment";
import ReviewProps from "../../Components/global/ReviewProps";
import Categories from "./Categories";
import { useViewAllLaw } from "../../Components/custom/Hooks";
import { Link } from "react-router-dom";


const PostReviews = () => {

  const {getAll}= useViewAllLaw()
  console.log(getAll)

  return (
    <div className="w-[100]% flex justify-center">
        {/* main */}
        <div className="flex w-[90%]">
            {/* hold */}
    <div className="medium:leading-3">
      <div className="big:hidden medium:block small:block">
      <Categories/>
      </div>
  {
    getAll?.map((el:any)=>(
     <div>
<Link to={`/${el.id}/detailed-page`}>
<ReviewProps
      avata={el.avatar}
      boxImg={el.image}
      name={el.name}
      title={el.title}
      text={el.description}
      time={moment(el.createdAt).fromNow()}
    />
</Link>
     </div>
    ))
  }
        </div>
        {/* main */}
       <div className="medium:hidden small:hidden w-[40%]">
       <Categories/>
       </div>
        </div>
    </div>
  )
}

export default PostReviews