function AppFeatures() {
  return (
    <div className="mt-4 grid grid-cols-1 justify-center gap-4 px-3 py-4 sm:mt-8 sm:grid-cols-2  md:mt-12">
      <div className="flex flex-col  gap-2 text-sm sm:text-lg md:w-[1/2]">
        <div className="mb-2 self-start rounded-xl bg-primary px-1 py-2 font-medium capitalize sm:px-2 sm:py-4">
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

      <div className="flex items-end gap-2 sm:justify-end">
        <div className="h-[60px] w-6 bg-primary sm:h-20 sm:w-8"></div>
        <div className="h-[80px] w-6 bg-secondary sm:h-[100px] sm:w-8"></div>
        <div className="h-[120px] w-6 bg-tertiary sm:h-[160px] sm:w-8"></div>
        <div className="h-[160px] w-6 bg-primary sm:h-[220px] sm:w-8"></div>
        <div className="h-[200px] w-6 bg-secondary sm:h-[280px] sm:w-8"></div>
        <div className="h-[240px] w-6 bg-tertiary sm:h-[380px] sm:w-8"></div>
        <div className="h-[300px] w-6 bg-primary sm:h-[480px] sm:w-8"></div>
        <div className="h-[360px] w-6 bg-secondary sm:h-[580px] sm:w-8"></div>
      </div>
    </div>
  );
}

export default AppFeatures;
