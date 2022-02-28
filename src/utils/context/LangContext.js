import { createContext, useState } from "react";

import { translationEN } from "../../assets/translations/translationEN";
import { translationHU } from "../../assets/translations/translationHU";
import { translationUK } from "../../assets/translations/translationUK";

export const LangContext = createContext();

export const LANGS = {
  EN: "en",
  HU: "hu",
  UK: "uk",
};

export const LangProvider = (props) => {
  const [Lang, updateLang] = useState(LANGS.EN);
  const [Translations, updateTranslations] = useState(translationEN);

  const changeLang = (lang) => {
    updateLang(lang);

    switch (lang) {
      case LANGS.HU:
        updateTranslations(translationHU);
        break;
      case LANGS.UK:
        updateTranslations(translationUK);
        break;
      default:
        updateTranslations(translationEN);
    }
  };

  const t = (key) => {
    let schema = Translations;
    const keyList = key.split(".");

    const length = keyList.length;

    for (let i = 0; i < length; i++) {
      schema = schema[keyList[i]];
      //console.log(schema)
    }

    return schema;
  };

  return (
    <LangContext.Provider value={{ Lang, changeLang, t }}>
      {props.children}
    </LangContext.Provider>
  );
};
