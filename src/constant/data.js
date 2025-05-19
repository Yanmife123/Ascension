import {
  Arrow_clockwise,
  Bell,
  Chart_bar,
  Chart_lne,
  How_it_works1,
  How_it_works2,
  How_it_works3,
  Logo_0,
  Logo_1,
  Logo_2,
  Logo_3,
  Logo_4,
  Logo_5,
  Logo_6,
  Logo_7,
  Logo_8,
  Logo_9,
  magnifying,
  Square_four,
} from "../assets";

const Navbar_Data = [
  {
    id: 1,
    link: "how_it_work",
    name: "How it works",
  },
  {
    id: 2,
    link: "benefit",
    name: "Benefits",
  },
  {
    id: 3,
    link: "features",
    name: "Features",
  },
  {
    id: 4,
    link: "pricing",
    name: "Pricing",
  },
  {
    id: 5,
    link: "testomonials",
    name: "Testomonials",
  },
];

const Company_Logos = [
  {
    id: 1,
    src: Logo_1,
  },
  {
    id: 2,
    src: Logo_2,
  },
  {
    id: 3,
    src: Logo_3,
  },
  {
    id: 4,
    src: Logo_4,
  },
  {
    id: 5,
    src: Logo_5,
  },
  {
    id: 6,
    src: Logo_6,
  },
  {
    id: 7,
    src: Logo_7,
  },
  {
    id: 8,
    src: Logo_8,
  },
  {
    id: 9,
    src: Logo_9,
  },
  {
    id: 10,
    src: Logo_0,
  },
];

const How_its_works = [
  {
    id: 1,
    src: How_it_works1,
    heading: "Set Up in Minutes",
    paragraph:
      "Connect Ascend to your e-commerce platform, select your preferred settings, and import your product catalog in just a few clicks.",
  },
  {
    id: 2,
    src: How_it_works2,
    heading: "Automate and Track",
    paragraph:
      "Let Ascensionhandle inventory, customer engagement, and order updates automatically. Track real-time performance with intuitive dashboards.",
  },
  {
    id: 3,
    src: How_it_works3,
    heading: "Optimize and Grow",
    paragraph:
      "Use data insights to fine-tune strategies, spot new opportunities, and make decisions that drive your business forward.",
  },
];

const Benefit_text = [
  {
    id: 1,
    text: "Automated Campaigns for Consistent Engagement",
  },
  {
    id: 2,
    text: "Personalized Messaging to Strengthen Customer Loyalty",
  },
  {
    id: 3,
    text: "Conversion Tracking for Clear Growth Insights",
  },
];

const Feature_Data = [
  {
    id: 1,
    icon: Chart_bar,
    heading: "Real-Time Analytics",
    paragraph:
      "Monitor your store’s performance instantly with clear data on visitors, sales, and trends.",
  },
  {
    id: 2,
    icon: Chart_lne,
    heading: "Multi-Channel Sales Sync",
    paragraph: "Easily sync your products and sales across multiple channels.",
  },
  {
    id: 3,
    icon: Arrow_clockwise,
    heading: "Task Automation",
    paragraph:
      "Automate inventory updates and order fulfillment to save time and reduce errors",
  },
  {
    id: 4,
    icon: Bell,
    heading: "Custom Reports",
    paragraph:
      "Create reports tailored to your needs, covering sales, customer behavior, and more.",
  },
  {
    id: 5,
    icon: Square_four,
    heading: "Stock & Order Tracking",
    paragraph:
      "Track stock and orders in one place for accurate inventory and efficient shipping.",
  },
  {
    id: 6,
    icon: magnifying,
    heading: "Real-Time Analytics",
    paragraph:
      "Gain insights into customer behavior to personalize marketing and boost sales.",
  },
];

const Payment_Plans = [
  {
    id: 1,
    monthly: "$34.99",
    yearly: "$27.99",
    heading: "Basic",
    text: "For businesses just getting started.",
    benefit: [
      "Streamlined project management",
      "Basic marketing tools",
      "Robust analytics and reporting",
    ],
  },
  {
    id: 2,
    monthly: "$59.99",
    yearly: "$47.99",
    heading: "Pro",
    text: "For small business building momentum.",
    benefit: [
      "All features of Basic Plan",
      "Multi-channel sales integration",
      "Customizable email campaigns",
      "A/B testing for marketing strategies",
    ],
  },
  {
    id: 3,
    monthly: "$99.99",
    yearly: "$27.99",
    heading: "Enterprise",
    text: "For fast-growing businesses.",
    benefit: [
      "All features of Pro Plan",
      "Custom integrations and solutions",
      "Priority customer support and training",
    ],
  },
];

export default {
  Navbar_Data,
  Company_Logos,
  How_its_works,
  Benefit_text,
  Feature_Data,
  Payment_Plans,
};
