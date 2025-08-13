import React, { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import CustomSelect from "./CustomSelect"; // Import the custom select component

const GoogleTranslate = () => {
  const languages = [
    { label: "English", value: "/en" },
    { label: `Bahasa Melayu`, value: "/ms" },
    { label: `Bahasa Indonesia`, value: "/id" },
    { label: `Español`, value: "/es" },
    { label: `Italiano`, value: "/it" },
    { label: `中文 (简体)`, value: "/zh-CN" },
    { label: `中國人 (傳統的)`, value: "/zh-TW" },
    { label: `日本語`, value: "/ja" },
    { label: `हिंदी `, value: "/hi" },
    { label: `عربي `, value: "/ar" },
    { label: `แบบไทย`, value: "/th" },
  ];

  const initialSelected = sessionStorage.getItem("selectedLanguage") || "en";
  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Default language
        includedLanguages: languages.map(lang => lang.value.substring(1)).join(','),
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";      
      document.body.appendChild(script);
      return () => document.body.removeChild(script); // Cleanup script on component unmount
    }
  }, []);

  const langChange = (newValue) => {
    sessionStorage.setItem("selectedLanguage", newValue);
    setSelected(newValue);
    setCookie("googtrans", newValue, { path: '/', secure: true, sameSite: 'None' });
    setTimeout(() => {
      window.location.reload();
    }, 10); // Short delay before reload
  };

  useEffect(() => {
    if (!sessionStorage.getItem("sessionActive")) {
      sessionStorage.setItem("selectedLanguage", "en");
      setCookie("googtrans", "/auto/en", { path: '/', secure: true, sameSite: 'None' });
      sessionStorage.setItem("sessionActive", "true");
      setSelected("en");
    }
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <CustomSelect
        options={languages}
        value={selected}
        onChange={langChange}
        placeholder="Language"
        className="notranslate"
      />
    </>
  );
};

export default GoogleTranslate;
