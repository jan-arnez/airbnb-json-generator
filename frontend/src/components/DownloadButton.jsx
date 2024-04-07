/* eslint-disable react/prop-types */
import Button from './Button';

const DownloadButton = ({ data }) => {
  const downloadJson = () => {
    const jsonString = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'airscrape.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return <Button onClick={downloadJson}>Download JSON file</Button>;
};

export default DownloadButton;
