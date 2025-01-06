import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-PK68J8MP92";

export const initGA = (): void => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const logPageView = (path: string): void => {
  ReactGA.send({ hitType: "pageview", page: path });
};
export const logEvent = (category: string, action: string, label?: string, value?: number): void => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};