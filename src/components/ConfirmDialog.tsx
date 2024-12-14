interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

import { motion, AnimatePresence } from 'framer-motion';

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel"
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-md w-full shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {title}
                  </h2>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {message}
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="group relative px-5 py-2.5 rounded-2xl 
                    bg-neutral-100 hover:bg-neutral-200 
                    dark:bg-neutral-800 dark:hover:bg-neutral-700 
                    text-neutral-700 dark:text-neutral-300 
                    transition-all duration-200 hover:shadow-sm
                    flex items-center justify-center
                    overflow-hidden"
                >
                  <span className="relative z-10">{cancelText}</span>
                  <span 
                    className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 
                    transform -translate-x-full group-hover:translate-x-0 
                    transition-transform duration-300 
                    opacity-20 group-hover:opacity-100"
                  />
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className="group relative px-5 py-2.5 rounded-2xl 
                    bg-red-500 hover:bg-red-600 
                    text-white 
                    transition-all duration-200 hover:shadow-md 
                    focus:ring-2 focus:ring-red-300 
                    dark:focus:ring-red-700
                    flex items-center justify-center
                    overflow-hidden"
                >
                  <span className="relative z-10">{confirmText}</span>
                  <span 
                    className="absolute inset-0 bg-red-600 
                    transform -translate-x-full group-hover:translate-x-0 
                    transition-transform duration-300 
                    opacity-20 group-hover:opacity-100"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
