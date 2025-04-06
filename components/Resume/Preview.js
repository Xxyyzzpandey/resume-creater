
'use client';

import { useEffect, useState } from 'react';
import Resume from './pdf';
import { useSelector } from 'react-redux';
import { CgSpinner } from 'react-icons/cg';
import { usePDF } from '@react-pdf/renderer';
import { FaDownload, FaEye } from 'react-icons/fa6';

const Loader = () => (
  <div className="flex min-h-32 w-full items-center justify-center">
    <CgSpinner className="animate-spin text-3xl text-primary-400" />
  </div>
);

const Preview = () => {
  const resumeData = useSelector(state => state.resume);
  const document = <Resume data={resumeData} />;
  const [instance, updateInstance] = usePDF({ document });
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    updateInstance(document);
  }, [resumeData.saved]);

  useEffect(() => {
    if (instance.blob) {
      const url = URL.createObjectURL(instance.blob);
      setBlobUrl(url);

      return () => URL.revokeObjectURL(url); // Clean up
    }
  }, [instance.blob]);

  const handlePreview = () => {
    if (blobUrl) {
      window.open(
        blobUrl,
        'Resume Preview',
        `toolbar=no, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, resizable=no, width=600, height=800, left=${window.innerWidth / 2 - 300}, top=100`
      );
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      {instance.loading || !blobUrl ? (
        <Loader />
      ) : (
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePreview}
            className="btn-filled text-sm px-4 py-1.5 bg-primary-400 text-gray-900"
          >
            <FaEye className="mr-2" />
            Preview
          </button>

          <a
            href={blobUrl}
            download={`${resumeData.contact?.name || 'resume'}.pdf`}
            className="btn-filled text-sm px-4 py-1.5 bg-primary-400 text-gray-900"
          >
            <FaDownload className="mr-2" />
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default Preview;
