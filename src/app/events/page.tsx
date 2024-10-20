import Card from '@/app/components/ui/Cards';

export default function Events() {
  const cards = [
    {
      title: "My First Commit",
      description: "HTML, CSS, and Javascript classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      title: "My Second Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      title: "My Second Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      title: "My Second Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      title: "My Second Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
    {
      title: "My Second Commit",
      description: "HTML, CSS classes to get you started with web development",
      image: "/images/image_2.jpg"
    },
  ];

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 '>
      {cards.map((card, index) => (
        <div className='py-3 flex justify-center items-center mx-2 mt-4'> 
        <Card
        key={index}
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
