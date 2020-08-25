import React, { useEffect } from 'react';

const MicroFrontendHook = ({ name, host, history }) => {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    const renderMicroFrontend = () => {
      window[`render${name}`] &&
        window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const promises = Object.keys(manifest['files'])
          .filter(key => key.endsWith('.js') || key.endsWith('.css'))
          .reduce((sum, key) => {
            if(key.endsWith('.js')){
              sum.push(
                new Promise(resolve => {
                  const path = `${host}${manifest['files'][key]}`;
                  const script = document.createElement('script');
                  if (key === 'main.js') {
                    script.id = scriptId;
                  }
                  script.onload = () => {
                    resolve();
                  };
                  script.src = path;
                  document.head.appendChild(script);
                })
              );
              return sum;
            }else if(key.endsWith('.css')){
              sum.push(
                new Promise(resolve => {
                  const path = `${host}${manifest['files'][key]}`;
                  const link = document.createElement('link');
                  link.href = path;
                  link.rel = 'stylesheet';
                  document.head.appendChild(link);
                  resolve();
                })
              );
              return sum;
            }
          }, []);
        Promise.allSettled(promises).then(() => {
          renderMicroFrontend();
        });
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  }, [name, host, history]);

  return <main id={`${name}-container`} />;
};

export default MicroFrontendHook;
