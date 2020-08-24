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
        //css
        // const promisesCss = Object.keys(manifest['files'])
        //   .filter(key => key.endsWith('.css'))
        //   .reduce((sum, key) => {
        //     sum.push(
        //       new Promise(resolve => {
        //         let path;
        //         if (host.indexOf('localhost') > -1){
        //           path = `${host}${manifest['files'][key]}`;
        //         }else{
        //           path = `${manifest['files'][key]}`;
        //         }
        //         const link = document.createElement('link');
        //         if (key === 'main.css') {
        //           link.id = scriptId+"-CSS";
        //         }
        //         link.onload = () => {
        //           resolve();
        //         };
        //         link.href = path;
        //         link.ref = 'stylesheet';
        //         document.head.appendChild(link);
        //       })
        //     );
        //     return sum;
        //   }, []);
        //js
        const promises = Object.keys(manifest['files'])
          .filter(key => key.endsWith('.js'))
          .reduce((sum, key) => {
            sum.push(
              new Promise(resolve => {
                let path;
                if (host.indexOf('localhost') > -1){
                  path = `${host}${manifest['files'][key]}`;
                }else{
                  path = `${manifest['files'][key]}`;
                }
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
          }, []);
        
        // const promises = [promisesCss, promisesJs];
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
