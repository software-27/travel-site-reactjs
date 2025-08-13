import { useEffect } from 'react';

function useGoogleTranslateScript() {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,ms,id,zh-CN,th,ja,kor,fill,hi,ar,it,zh-Hant', // Include all languages that you need
        },
        'google_translate_element'
      );
    };
  }, []);
}

export default useGoogleTranslateScript;