import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const HomeSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className="container d-flex flex-column text-center ">
        <Skeleton width={`100%`} height={35} className="mb-3 mt-5" />
        <Skeleton width={140} height={90} className="mb-2" />
        <div>
          <Skeleton width={140} height={40} className="mb-3" />
          <Skeleton width={140} height={19} className="mb-3" />
          <Skeleton width={140} height={19} className="mb-5" />
        </div>
        <Skeleton width={200} height={150} className="my-5" />
        <Skeleton width={200} height={35} className="my-5" />
        <div className="row">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="col">
              <Skeleton width={140} height={30} className="mb-3" />
              <Skeleton width={140} height={50} className="mb-3" />
              <Skeleton width={140} height={30} className="mb-5" />
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HomeSkeleton;
