import deviceAnalytics from "@/assets/icons/device-analytics.svg?raw";
import deviceDesktopCode from "@/assets/icons/device-desktop-code.svg?raw";
import deviceMobileCode from "@/assets/icons/device-mobile-code.svg?raw";

type Service = {
  name: string;
  icon: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    name: "Landing pages, blogs",
    icon: deviceAnalytics,
    description: "from $30 per hour",
  },
  {
    name: "Web Application",
    icon: deviceDesktopCode,
    description: "from $35 per hour",
  },
  {
    name: "Mobile Application (Android & iOS)",
    icon: deviceMobileCode,
    description: "from $40 per hour",
  },
];
