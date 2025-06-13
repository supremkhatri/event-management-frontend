"use client"
import { userSubscribedClasses } from "@/lib/class_data";
import OngoingClassCard from "@/app/class/ongoing/Cards";
import CompletedClassCard from "./completed/Card";
import { useUserStore } from "@/store/useUserStore";



export default function Classes() {
  const ongoing = userSubscribedClasses.filter(
    (classes) => classes.isCompleted === false
  );
  const completed = userSubscribedClasses.filter(
    (classes) => classes.isCompleted === true
  );
  
  const user = useUserStore((state) => state.user);
  if (!user) {
    return( <div className="py-24 my-8 h-96 text-center text-stone-300">
        <h2 className="text-4xl font-semibold mb-4">You`&apos;`re not logged in</h2>
        <p className="text-lg">Please LogIn/SignUp to view your subscribed classes.</p>
      </div>
    )
  }

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
