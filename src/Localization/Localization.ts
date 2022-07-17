import LocalizedStrings from "react-localization";
import ar from "./ar";
import en from "./en";

const strings = new LocalizedStrings({
  en: {
    ...en,
  },
  ar: {
    ...ar,
  },
});

export default strings;
