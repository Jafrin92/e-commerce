import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import global_eng from "./translations/eng/global.json";
import global_bng from "./translations/bng/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {
    escapValue: false,
    lng: "eng",
    resources: {
      eng: {
        global: global_eng,
      },
      bng: {
        global: global_bng,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </>
);
