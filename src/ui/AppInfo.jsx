function AppInfo() {
  return (
    <div className="relative  mt-20 cursor-pointer bg-secondary">
      <div className="flex ">
        {/* Text container */}
        <div className="flex flex-grow flex-col justify-start gap-2 p-4 text-[#f4f4f4]">
          <div className="flex text-3xl font-semibold">
            <span>NEXT</span>
            <span className="text-primary">EVENT</span>
          </div>
          <h2 className="text-xl font-medium uppercase">The Power is Yours</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, voluptatum, quas, natus quia voluptate
            exercitationem doloribus dolorum quibusdam fugiat. Quisquam
            voluptates, quae, voluptatum, quas, natus quia voluptate
            exercitationem doloribus dolorum quibusdam fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, voluptatum, quas, natus quia voluptate
            exercitationem doloribus dolorum quibusdam fugiat. Quisquam
            voluptates, quae, voluptatum, quas, natus quia voluptate
            exercitationem doloribus dolorum quibusdam fugiat.
          </p>
        </div>

        {/* Image container */}
        <div className=" z-1 relative w-2/3 flex-shrink-0">
          <img
            src="images/club-image.jpeg"
            alt="club banner"
            className="h-auto w-full rounded-bl-[240px] rounded-br-[240px]"
          />
        </div>
        <div className="z-2 absolute inset-0 flex  justify-end gap-1 self-end p-4 text-[#f4f4f4]">
          <h1 className="text-3xl font-medium capitalize tracking-wide">
            Clubs
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
