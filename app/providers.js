"use client";

import ReduxProvider from "./redux/providers";

export default function Providers({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
