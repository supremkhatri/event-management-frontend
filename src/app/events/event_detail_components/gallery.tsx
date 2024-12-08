import { useState } from "react";
import Image from "next/image";
import { EVENTS } from "@/lib/event_data";

const GallerySection = () => {
  const pastImages = EVENTS.filter((event) => event.status === "past")
    .flatMap((event) =>
      event.images?.map((image, imgIdx) => ({
        imageUrl: image,
        id: `${event.title}-${imgIdx}`,
      }))
    );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pastImages.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pastImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12 tracking-wide">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastImages.map(({ imageUrl, id }, index: number) => (
            <div
              key={id}
              className="relative group rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:z-10"
              onClick={() => openModal(index)}
            >
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition duration-500 ease-in-out group-hover:blur-sm group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold tracking-wider">
                  Click to View
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Slider */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-500 transition duration-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative max-w-3xl mx-auto">
              <Image
                src={pastImages[currentIndex].imageUrl}
                alt={`Image ${currentIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 ease-in-out"
              />
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition duration-300"
                onClick={prevImage}
              >
                &#8249;
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition duration-300"
                onClick={nextImage}
              >
                &#8250;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
