import { userSubscribedClasses } from "@/lib/class_data";
import OngoingClassCard from "@/app/class/ongoing/Cards";
import CompletedClassCard from "./completed/Card";

export default function Classes() {
  const ongoing = userSubscribedClasses.filter(
    (classes) => classes.isCompleted === false
  );
  const completed = userSubscribedClasses.filter(
    (classes) => classes.isCompleted === true
  );

  return (
    <>
      <div className="  pt-14 flex flex-col items-center text-center">
        <h2 className="my-8 text-5xl text-stone-300 "> Enrolled Classes </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ongoing.map((classes, index) => (
            <div key={index} className=" mb-4">
              <OngoingClassCard
                id={index.toLocaleString()}
                title={classes.title}
                imageUrl={classes.imageUrl}
                instructor={classes.instructor}
                progress={classes.progress}
              />
            </div>
          ))}
        </div>
        <h2 className="my-8 text-5xl text-stone-300 "> Completed Classes </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {completed.map((classes, index) => (
            <div key={index} className=" mb-4">
              <CompletedClassCard
                id={index.toLocaleString()}
                title={classes.title}
                imageUrl={classes.imageUrl}
                instructor={classes.instructor}
                progress={classes.progress}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
