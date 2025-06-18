
import React from 'react';

export const LoadingSpinnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.238-.009-.868-.014-1.703-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.465-1.11-1.465-.909-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.295 2.748-1.026 2.748-1.026.546 1.375.201 2.392.1 2.645.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A9.997 9.997 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" d="M10 3a1 1 0 01.666.277l2.834 2.362a1 1 0 001.21-.069l1.646-1.371a1 1 0 011.362 1.453l-1.37 1.646a1 1 0 00-.07 1.21l2.362 2.834A1 1 0 0117.723 12H12a1 1 0 00-1 1v5.723a1 1 0 01-1.638.777l-2.833-2.362a1 1 0 00-1.21.07l-1.646 1.37a1 1 0 01-1.362-1.452l1.37-1.646a1 1 0 00.07-1.21L3.277 9.638A1 1 0 013 8V3a1 1 0 011-1h5.723A1 1 0 0010 3zm0 2.414L8.414 7 10 8.586 11.586 7 10 5.414zM5.414 10L7 11.586 8.586 10 7 8.414 5.414 10zM10 14.586L11.586 13 10 11.414 8.414 13 10 14.586zm4.586-4.586L13 8.414 11.414 10 13 11.586 14.586 10z" clipRule="evenodd"/>
    </svg>
);
