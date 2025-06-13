import { cn } from "@/lib/utils";
import { IconTerminal2 } from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Instant Notifications",
      description: "Get real-time updates about upcoming events and deadlines.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Easy Registration",
      description:
        "Register for any event in just a few clicks with instant confirmation.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Smart Reminders",
      description:
        "Receive personalized reminders before events, so you’re always on time.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Certificates",
      description:
        "Automatically receive digital certificates after attending events.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Personal Dashboard",
      description:
        "Track your registered events, feedback, and certificates in one place.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Feedback System",
      description:
        "Give your opinions and help organizers improve future events.",
      icon: <IconTerminal2 />,
    },
  ];

  return (
    <div className="bg-neutral-950 flex flex-col items-center justify-center">
      <div className="text-2xl sm:text-5xl font-extrabold mt-20">
        <h2>Benefits Of Subscribing To EMS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature bg-neutral-900 dark:border-neutral-800",
        (index === 0 || index === 4) &&
          "lg:border-l bg-neutral-900 dark:border-neutral-800",
        index < 4 && "lg:border-b bg-neutral-900 dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <div className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </div>
    </div>
  );
};
