function AppFeatures() {
  return (
    <div className="mt-20 grid grid-cols-2 justify-center gap-4 px-3  py-4">
      <div className="flex flex-col  gap-2 md:w-[1/2]">
        <div className="mb-2 self-start rounded-xl bg-primary px-2 py-4 font-medium capitalize">
          <h2>Unlocked Personalized Event Discovery</h2>
        </div>
        <p>
          Imagine an application that not only recommends nearby events but does
          so with an unparalleled level of personalization. Our application is
          built on the idea that your entertainment preferences are a key to
          discovering events that you'll love. By integrating data from your
          existing accounts on platforms such as Netflix and Spotify, our
          application creates a highly customized experience for you.
        </p>
        <h2 className="font-medium capitalize text-tertiary">
          Advanced AI at the core:
        </h2>
        <p>
          What truly sets our application apart is the advanced AI that powers
          it. The AI-driven features include:
        </p>
        <ul>
          <li>
            1.{" "}
            <span className="font-semibold text-tertiary">
              Content-Based Filtering:
            </span>{" "}
            We go beyond the surface to understand and categorize your content
            preferences from Netflix, Spotify, Apple Music, and even your
            favorite Uber Eats orders. This enables us to offer event
            recommendations that are uniquely tailored to your interests.
          </li>
          <li>
            2.{" "}
            <span className="font-semibold text-tertiary">
              Collaborative Filtering
            </span>{" "}
            Our AI identifies events that are enjoyed by users with similar
            content consumption patterns. This means you'll discover events that
            align not only with your individual preferences but also with those
            of a like-minded community.
          </li>
          <li>
            3.{" "}
            <span className="font-semibold text-tertiary">
              Collaborative Filtering Predictive Analytics:
            </span>{" "}
            Our application can forecast the popularity of events, allowing you
            to secure tickets for high-demand events before they sell out. Say
            goodbye to disappointment due to sold-out shows.
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
