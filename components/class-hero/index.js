import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ClassDescription = ({ content }) => {
  return (
    <div className="mx-auto prose-lg prose-lg mt-4 sm:mt-6 lg:mt-6 sm:prose-lg text-purple-900">
      {documentToReactComponents(content.json)}
    </div>
  );
};

const ClassHero = ({ name, summary, coverImage, description }) => {
  return (
    <div>
      <section className="px-4 pt-8 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <h2 className="max-w-3xl mx-auto text-center text-purple-900 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter">
              {name}
            </h2>
            <p className="max-w-5xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
              {summary}
            </p>
            <div className="flex justify-center mt-8">
              <a
                href=""
                className="text-lg font-semibold text-purple-900 bg-yellow-500 eading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="18" y1="13" x2="12" y2="19" />
                  <line x1="6" y1="13" x2="12" y2="19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative z-1 mt-14 sm:mt-16">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-16 sm:aspect-h-9">
              <img
                className="object-cover w-full h-full shadow-xl rounded-3xl"
                src={coverImage}
                alt="preschool"
              />
            </div>
          </div>
          <ClassDescription content={description} />
        </div>
      </section>
      <div className="w-full h-32 sm:h-40 lg:h-44 bg-gradient-to-b from-purple-25 to-white"></div>
    </div>
  );
};

export default ClassHero;
