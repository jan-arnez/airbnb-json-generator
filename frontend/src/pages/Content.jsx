import { useData } from '../context/DataContext';
import DownloadButton from '../components/DownloadButton';

const Content = () => {
  const { data } = useData();
  console.log(data);
  return (
    <div className="container min-h-screen py-[104px] h-full flex flex-col items-center justify-center gap-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-32 h-32 stroke-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
      <div className="text-5xl font-medium text-stone-900 pb-6">
        Successfully compleated
      </div>
      <DownloadButton data={data} />
    </div>
  );
};

export default Content;
