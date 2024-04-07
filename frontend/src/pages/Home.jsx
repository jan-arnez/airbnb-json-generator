import UrlForm from '../components/UrlForm';

const Home = () => {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <div className="h-full container pt-[104px] pb-6">
      <div className="w-full rounded-md h-full relative overflow-hidden z-20">
        <div className="space-y-6 pb-12">
          <div className="text-center text-balance space-y-2 lg:max-w-[800px] mx-auto">
            <div className="text-6xl font-bold tracking-tight text-stone-900 text-balance">
              <span className="font-dm-sans text-primary">airbnb</span> URL to
              valid JSON
            </div>
            <div className="md:text-xl text-lg text-stone-500">
              Transform Airbnb URLs into JSON with ease. Start build own booking
              platform effortlessly, focusing on design without worrying about
              data.
            </div>
          </div>
          <UrlForm />
        </div>
        <HeroImage />
      </div>
      <div className="absolute bottom-0 py-2 bg-white left-1/2 -translate-x-1/2 text-stone-400 w-full text-center z-50">
        &copy; {fullYear} Jan Arnež. All rights reserved.
      </div>
    </div>
  );
};

export default Home;

const HeroImage = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden shadow-sm select-none">
      <img
        src="/airbnb-screenshot.png"
        alt="Airbnb website screenshot"
        className="object-cover object-center image-scale-animate"
      />
      <div className="hidden md:block absolute w-full h-full left-0 top-0 z-10 bg-gradient-focus"></div>
    </div>
  );
};
