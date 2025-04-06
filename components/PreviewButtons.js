// 'use client';

// import { useEffect } from 'react';
// import Resume from './Resume/pdf';
// import { usePDF } from '@react-pdf/renderer';
// import { useSelector } from 'react-redux';
// import { FaDownload, FaEye } from 'react-icons/fa6';

// const PreviewButtons = () => {
//   const resumeData = useSelector(state => state.resume);
//   const document = <Resume data={resumeData} />;
//   const [instance, updateInstance] = usePDF({ document });

//   useEffect(() => {
//     updateInstance(document);
//   }, [resumeData.saved]);

//   const preview = () => {
//     window.open(
//       instance.url,
//       'Resume Preview',
//       `toolbar=no, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, resizable=no, width=600, height=800, left=${window.innerWidth / 2 - 300}, top=100`
//     );
//   };

//   return (
//     <div className="flex justify-center gap-4">
//       <button
//         onClick={preview}
//         className="flex items-center gap-2 rounded-md border border-primary-400 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:text-blue-500 md:text-base"
//         disabled={!instance.url}
//       >
//         <FaEye />
//         Preview
//       </button>

//       <a
//         href={instance.url}
//         download={`${resumeData.contact?.name || 'resume'}.pdf`}
//         className="flex items-center gap-2 rounded-md border border-primary-400 px-5 py-2 text-sm font-semibold text-primary-400 shadow-md transition hover:bg-primary-400 hover:text-blue-500 md:text-base"
//       >
//         <FaDownload />
//         Download
//       </a>
//     </div>
//   );
// };

// export default PreviewButtons;


// 'use client'

// import { useEffect, useState } from 'react';
// import Resume from './Resume/pdf';
// import { usePDF } from '@react-pdf/renderer';
// import { useSelector } from 'react-redux';
// import { FaDownload, FaEye } from 'react-icons/fa6';

// const PreviewButtons = () => {
//   const resumeData = useSelector(state => state.resume);
//   const document = <Resume data={resumeData} />;
//   const [instance, updateInstance] = usePDF({ document });
//   const [blobUrl, setBlobUrl] = useState(null);

//   useEffect(() => {
//     updateInstance(document);
//   }, [resumeData.saved]);

//   useEffect(() => {
//     if (instance.blob) {
//       const url = URL.createObjectURL(instance.blob);
//       setBlobUrl(url);
//       return () => URL.revokeObjectURL(url); // clean up
//     }
//   }, [instance.blob]);

//   const handlePreview = () => {
//     if (!blobUrl) return;
//     window.open(
//       blobUrl,
//       'Resume Preview',
//       `toolbar=no,location=no,menubar=no,scrollbars=no,status=no,titlebar=no,resizable=no,width=600,height=800,left=${window.innerWidth / 2 - 300},top=100`
//     );
//   };

//   return (
//     <div className="mb-6 flex justify-center gap-4">
//       <button
//         onClick={handlePreview}
//         className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 md:text-base"
//         disabled={!blobUrl}
//       >
//         <FaEye />
//         Preview
//       </button>

//       <a
//         href={blobUrl || '#'}
//         download={`${resumeData.contact?.name || 'resume'}.pdf`}
//         className={`flex items-center gap-2 bg-blue-500 rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 hover:text-white md:text-base ${
//           !blobUrl ? 'pointer-events-none opacity-50' : ''
//         }`}
//       >
//         <FaDownload />
//         Download
//       </a>
//     </div>
//   );
// };

// export default PreviewButtons;

'use client'

import { useEffect, useMemo, useState } from 'react';
import Resume from './Resume/pdf';
import { usePDF } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import { FaDownload, FaEye } from 'react-icons/fa6';

const PreviewButtons = () => {
  const resumeData = useSelector(state => state.resume);

  const document = useMemo(() => <Resume data={resumeData} />, [resumeData]);
  const [instance] = usePDF({ document });
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    if (instance.blob) {
      const url = URL.createObjectURL(instance.blob);
      setBlobUrl(url);

      return () => URL.revokeObjectURL(url); // cleanup
    }
  }, [instance.blob]);

  const handlePreview = () => {
    if (!blobUrl) return;
    window.open(
      blobUrl,
      'Resume Preview',
      `toolbar=no,location=no,menubar=no,scrollbars=no,status=no,titlebar=no,resizable=no,width=600,height=800,left=${window.innerWidth / 2 - 300},top=100`
    );
  };

  return (
    <div className="mb-6 flex justify-center gap-4">
      <button
        onClick={handlePreview}
        className="flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 md:text-base"
        disabled={!blobUrl}
      >
        <FaEye />
        Preview
      </button>

      <a
        href={blobUrl || '#'}
        download={`${resumeData.contact?.name || 'resume'}.pdf`}
        className={`flex items-center gap-2 bg-blue-500 rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 hover:text-white md:text-base ${
          !blobUrl ? 'pointer-events-none opacity-50' : ''
        }`}
      >
        <FaDownload />
        Download
      </a>
    </div>
  );
};

export default PreviewButtons;



