'use client';

import Modal from 'react-modal';
import { useState } from 'react';
;

interface CommentModalProps {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (comment: string) => void
}

export const CommentModal = ({ isOpen, onClose, onSubmit }: CommentModalProps) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onSubmit(comment);
    setComment('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto space-y-3 pt-12">
        <textarea value={comment} rows={8} onChange={(e) => setComment(e.target.value)} className='border p-3 w-full rounded-xl' />
        <button
          onClick={handleSubmit}
          className='py-2 px-3 w-full rounded-xl text-white hover:text-neutral-800 bg-blue-600 hover:bg-transparent border border-transparent hover:border-neutral-400 transition-all duration-300 ease-in-out'
        >
          Add Comment
        </button>
      </div>
    </Modal>
  );
};
