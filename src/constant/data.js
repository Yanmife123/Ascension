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
  Testomo_img_1,
  Testomo_img_2,
  Testomo_img_3,
  Testomo_img_4,
  Testomo_img_5,
  Testomo_img_6,
} from "../assets";
import { Testomonail } from "../component";

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

const Testomonials = [
  {
    id: 1,
    img: Testomo_img_1,
    text: '"Adorn took our brand to new heights with their innovative designs and strategic approach. Their teams creativity and attention to detail truly set them apart."',
    name: "Matthew Love",
    profession: "Co-founder of Monday",
  },
  {
    id: 2,
    img: Testomo_img_2,
    text: '"Ascend’s custom reporting tools are a game changer. I can easily create reports to track performance and optimize strategies."',
    name: "Lily Kim",
    profession: "Head of Operations at Green Roots",
  },
  {
    id: 3,
    img: Testomo_img_3,
    text: '"This platform provides unmatched insights into customer behavior. We’ve been able to make smarter decisions and boost sales effortlessly."',
    name: "Elena Morales",
    profession: "Owner of Simply Chic",
  },
  {
    id: 4,
    img: Testomo_img_4,
    text: '"Managing multiple sales channels used to be overwhelming, but with Ascend, its all seamless. We never miss a beat."',
    name: "David Nguyen",
    profession: "Founder of Urban Outfitters",
  },
  {
    id: 5,
    img: Testomo_img_5,
    text: '"Ascend’s custom reporting tools are a game changer. I can easily create reports to track performance and optimize strategies."',
    name: "Lily Kim",
    profession: "Head of Operations at Green Roots",
  },
  {
    id: 6,
    img: Testomo_img_6,
    text: "'Adorn took our brand to new heights with their innovative designs and strategic approach. Their team's creativity and attention to detail truly set them apart.'",
    name: "Yanmife Adegbola",
    profession: "Full Stack Dev at techy vibration",
  },
];

const questions = [
  {
    id: 1,
    heading: "What makes Ascension different from other e-commerce tools?",
    text: "Ascension stands out with its intuitive design, powerful AI-driven features, and seamless integration of sales, marketing, and analytics tools in one platform. It's designed to save you time, automate routine tasks, and give you the data insights you need to grow your business.",
  },
  {
    id: 2,
    heading: "How does Ascensionhelp increase sales?",
    text: " Ascension boosts sales by automating marketing efforts, providing real-time analytics, and enabling personalized customer experiences. You can easily identify trends, optimize inventory, and create targeted campaigns that drive engagement and conversions.",
  },
  {
    id: 3,
    heading: "Is Ascension suitable for small businesses?",
    text: "Absolutely. Ascension is designed to be user-friendly and scalable, making it an excellent choice for small businesses that want to streamline their operations and grow efficiently without a steep learning curve.",
  },
  {
    id: 4,
    heading: "What kind of support does Ascension offer?",
    text: "Ascension provides 24/7 customer support, a knowledge base, and live chat assistance to help you with any issues or questions you may have. We’re here to ensure your experience is smooth and successful.",
  },
  {
    id: 5,
    heading: "How does Ascension ensure data security for my business?",
    text: "Ascension prioritizes data security with robust encryption protocols, regular audits, and compliance with industry standards to keep your information safe.",
  },
];

export default {
  Navbar_Data,
  Company_Logos,
  How_its_works,
  Benefit_text,
  Feature_Data,
  Payment_Plans,
  Testomonials,
  questions,
};
