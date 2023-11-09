function Gallery() {
  return (
    <div className="mt-20 grid  grid-cols-2 ">
      <img
        src="images/gallery-image-01.jpg"
        alt="people seated in a concert"
        className="h-[400px] w-full rounded-bl-2xl rounded-tl-[100px] object-cover"
      />
      <img
        src="images/gallery-image-02.jpg"
        alt="people seated in a concert"
        className="h-[400px] w-full rounded-br-[100px] rounded-tr-2xl object-cover"
      />
    </div>
  );
}

export default Gallery;
