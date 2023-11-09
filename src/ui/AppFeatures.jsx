function AppFeatures() {
  return (
    <div className="mt-20 grid grid-cols-2 justify-center gap-4 px-3  py-4">
      <div className="flex flex-col  gap-2 md:w-[1/2]">
        <div className="mb-2 self-start rounded-xl bg-primary px-2 py-4 font-medium capitalize">
          <h2>Unlocked Personalized Event Discovery</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptates, quod, quia voluptas doloribus quas accusantium
          natus quibusdam autem doloremque. Quisquam voluptatum, voluptates,
          quod, quia voluptas doloribus quas accusantium natus quibusdam autem
          doloremque.
        </p>
        <h2 className="font-medium capitalize text-tertiary">
          Advanced AI at the core:
        </h2>
        <p>
          What truly sets our application is the advanced AI that powers it. The
          AI features include:
        </p>
        <ul>
          <li>
            1.{" "}
            <span className="font-semibold text-tertiary">
              Personalized Event Discovery
            </span>{" "}
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptates, quod, quia voluptas doloribus quas
            accusantium natus quibusdam autem doloremque. - Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam voluptatum,
            voluptates, quod, quia voluptas doloribus quas accusantium natus
            quibusdam autem doloremque.
          </li>
          <li>
            2.{" "}
            <span className="font-semibold text-tertiary">
              Personalized Event Discovery
            </span>{" "}
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptates, quod, quia voluptas doloribus quas
            accusantium natus quibusdam autem doloremque. - Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam voluptatum,
            voluptates, quod, quia voluptas doloribus quas accusantium natus.
          </li>
          <li>
            3.{" "}
            <span className="font-semibold text-tertiary">
              Personalized Event Discovery
            </span>{" "}
            - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptates, quod, quia voluptas doloribus quas
            accusantium natus. - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam voluptatum, voluptates, quod, quia.
          </li>
        </ul>
      </div>

      <div className="flex items-end justify-end gap-2">
        <div className="h-20 w-8 bg-primary"></div>
        <div className="h-[100px] w-8 bg-secondary"></div>
        <div className="h-[160px] w-8 bg-tertiary"></div>
        <div className="h-[220px] w-8 bg-primary"></div>
        <div className="h-[280px] w-8 bg-secondary"></div>
        <div className="h-[380px] w-8 bg-tertiary"></div>
        <div className="h-[480px] w-8 bg-primary"></div>
        <div className="h-[580px] w-8 bg-secondary"></div>
      </div>
    </div>
  );
}

export default AppFeatures;
