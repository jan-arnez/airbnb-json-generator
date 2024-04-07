const Loader = () => {
  return (
    <div className="h-24 w-full flex flex-col justify-center items-center gap-y-2 z-50">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <div className="text-sm font-medium font-stone-950">
        This could take a minute...
      </div>
    </div>
  );
};

export default Loader;
