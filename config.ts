import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";
import { brandColors } from "./config/colors";

const config = {
  // REQUIRED
  appName: "E-quil",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app.",
  // REQUIRED (no https://, not trailing slash at the end, just the naked domain)
  domainName: "fenago.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (resend.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_pro",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Pro",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "For growing teams",
        // The price you want to display, the one user will be charged on Stripe.
        price: 299,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 399,
        features: [
          {
            name: "Up to 500 employees",
          },
          { name: "Real-time burnout alerts" },
          { name: "Basic workload analytics" },
          { name: "Email support" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_business",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Business",
        description: "Most popular",
        price: 799,
        priceAnchor: 999,
        features: [
          {
            name: "Up to 2,000 employees",
          },
          { name: "Advanced predictive analytics" },
          { name: "Intervention recommendations" },
          { name: "HRIS & Slack integration" },
          { name: "Priority support" },
          { name: "Custom dashboards" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_enterprise",
        name: "Enterprise",
        description: "For large organizations",
        price: 0,
        features: [
          {
            name: "Unlimited employees",
          },
          { name: "Full API access" },
          { name: "Dedicated account manager" },
          { name: "Custom integrations" },
          { name: "24/7 phone support" },
          { name: "SLA guarantee" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  resend: {
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `FeNAgO <noreply@resend.fenago.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Dr Lee at FeNAgO <drlee@resend.fenago.com>`,
    // Email shown to customer if they need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "socrates.73@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you use any theme other than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: brandColors.teal,
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users to after a successful login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
