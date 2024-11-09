// src/app/events/page.tsx
import Card from '@/app/components/ui/Cards';

export default function Events() {
  const cards = [
    {
      id: '1',
      title: "My First Commit",
      description: "HTML, CSS, and Javascript classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      id: '2',
      title: "My Second Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      id: '3',
      title: "My Third Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      id: '4',
      title: "My Fourth Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      id: '5',
      title: "My Fifth Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      id: '6',
      title: "My Sixth Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.id} className="py-3 flex justify-center items-center mx-2 mt-4">
            <Card
              id={card.id}  // Pass `id` to the Card component
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}
