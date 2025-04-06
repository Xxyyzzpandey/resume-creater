
'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSave } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import ResumeFields from '@/config/ResumeFields';
import SingleEditor from './SingleEditor';
import MultiEditor from './MultiEditor';
import { saveResume } from '@/store/slices/resumeSlice';

const Editor = ({ tab }) => {
  const { multiple } = ResumeFields[tab] || {};
  const dispatch = useDispatch();
  const [isSaving, setIsSaving] = useState(false);

  const save = async (e) => {
    e?.preventDefault();
    setIsSaving(true);

    // Dispatch the action (even if it's not async)
    dispatch(saveResume());

    // Simulate loading delay so spinner is visible
    await new Promise((res) => setTimeout(res, 600));

    setIsSaving(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(saveResume());
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <form onSubmit={save} className="card my-8 bg-gray-900 m-1">
      {multiple ? <MultiEditor tab={tab} /> : <SingleEditor tab={tab} />}

      <button
        type="submit"
        disabled={isSaving}
        className="group relative ml-auto mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-blue-500 bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed md:w-auto md:text-base"
      >
        {isSaving ? (
          <>
            <CgSpinner className="animate-spin text-lg" />
            <span>Saving...</span>
          </>
        ) : (
          <>
            <span className="transition-transform group-hover:-translate-y-[1px]">Save</span>
            <FaSave className="text-base transition-transform group-hover:rotate-[-10deg]" />
          </>
        )}
      </button>
    </form>
  );
};

export default Editor;


