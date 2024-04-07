/* eslint-disable react/prop-types */
import { useState } from 'react';
import ContentForm from '../components/ContentForm';
import UrlForm from '../components/UrlForm';
import { useData } from '../context/DataContext';

const Links = () => {
  const { data } = useData();
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <Popup isToggled={isToggled} setIsToggled={setIsToggled} />
      <div className="h-screen container text-center text-stone-900 flex flex-col items-center justify-center space-y-6">
        <div>
          <div className="text-5xl font-medium">
            We found {data.links.length} results
          </div>
          <div className="space-y-2 pt-12 pb-2">
            <div className="font-medium text-lg">Do you want to continue?</div>
            <ContentForm />
          </div>
          <div
            className="text-stone-500 underline cursor-pointer select-none"
            onClick={() => setIsToggled(true)}
          >
            Check all results
          </div>
        </div>
        <div className="text-2xl font-medium">OR</div>
        <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="text-3xl font-medium">Do you want to try new link?</div>
        <UrlForm />
      </div>
    </>
  );
};

export default Links;

const Popup = ({ isToggled, setIsToggled }) => {
  const { data } = useData();
  return (
    <>
      <div
        className={`${
          isToggled ? 'block' : 'hidden'
        } absolute top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-40`}
      >
        <div className="absolute h-[500px] lg:w-3/4 w-full bg-white border rounded-md shadow-sm space-y-6 overflow-y-scroll p-6 z-50">
          <div className="text-3xl font-medium text-center">
            {data.links.length} Results
          </div>
          <hr />
          {data.links.length <= 0 ? (
            <div className="text-center py-2">
              0 results found. Try new link.
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {data.links.map((link, index) => (
                <a
                  href={link}
                  key={index}
                  className="w-full h-max select-none space-y-2"
                >
                  <div className="text-xl font-medium">Link {index + 1}</div>
                  <li className="p-2 w-full rounded-md border hover:bg-stone-100 transition-colors overflow-hidden">
                    {link}
                  </li>
                </a>
              ))}
            </ul>
          )}
          <div
            className="absolute top-0 right-4 cursor-pointer"
            onClick={() => {
              setIsToggled(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
