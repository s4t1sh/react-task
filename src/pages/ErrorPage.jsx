import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  const error = useRouteError();
  console.error("Router error captured:", error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full backdrop-blur-xl bg-primary border border-white/20 rounded-3xl p-8 text-center shadow-2xl"
      >
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Application Error
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          We encountered an unexpected error while navigating. 
          Our team has been notified.
        </p>
        
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95"
          >
            Try Again
          </button>
          
          <Link 
            to="/" 
            className="w-full py-4 bg-white/5 hover:bg-white/10 text-gray-900 dark:text-white border border-white/10 font-semibold rounded-xl transition-all active:scale-95 block"
          >
            Go to Homepage
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-left">
            <p className="text-xs font-mono text-white bg-red-400/10 p-4 rounded-lg overflow-auto max-h-40 whitespace-pre-wrap">
              {error?.statusText || error?.message || "Unknown error"}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ErrorPage;
