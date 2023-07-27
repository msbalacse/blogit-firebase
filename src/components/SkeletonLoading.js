import Skeleton from "react-loading-skeleton";

const SkeletonLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium">
        <Skeleton />
      </h1>
      <p className="">
        <Skeleton count={3} />
      </p>
      <div className="flex items-center justify-between">
        <p className="p-1">
          <Skeleton width={"100px"} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonLoading;
