import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ServiceSection = () => {
  const marketplace = [
    "PSP Options for P2M Transactions",
    "Multiple Payment Service Provider Integration",
    "Secure Person-to-Merchant Payments",
    "Real-time Transaction Processing",
    "Analytical & Reporting Dashboard",
    "Revenue & Settlement Insights",
    "Financial Performance Monitoring",
  ];
 const saas = [
   "Subscription & Recurring Payments Automation",
   "Digital Banking with Virtual Accounts",
   "Easy-to-Use Invoicing Solutions",
   "AI-Driven Financial Insights & Optimisation",
   "Automated Reconciliation & Settlement",
   "Fraud Detection & Risk Monitoring",
   "Scalable APIs for Financial Integrations",
 ];


const banking = [
  "AI-Powered Cash Flow Management",
  "Unified Payment Processing Across Channels",
  "Automated Reconciliation & Invoice Matching",
  "Real-Time Transaction Monitoring",
  "Multi-Bank & Account Integration",
  "One-Click & Batch Payment Processing",
  "Actionable Financial Insights & Reporting",
    ];
    const financial = [
      "AI-Driven Account Reconciliation",
      "Automated Financial Close Workflows",
      "Enhanced Reporting Accuracy",
      "Real-Time Financial Visibility",
      "Audit-Ready Compliance Tracking",
      "Cross-Team Collaboration Tools",
      "Smart Exception & Risk Detection",
    ];
const quickflow = [
  "Rapid Financing for Immediate Needs",
  "Manage Short-Term Cash Flow",
  "Support Business Growth with Loans",
  "Flexible Overdraft Options",
  "Streamlined Loan Application",
  "Real-Time Financial Monitoring",
  "Custom Repayment Plans",
];



  return (
    <>
      <section className="w-full bg-white mx-auto">
        {/* First */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-22   px-6 md:px-10 lg:px-14 pb-20 pt-10">
          {/* LEFT SIDE IMAGE & MOCKUP */}
          <div className="flex  ">
            <div className="relative ">
              <img
                src="/images/mobile.webp"
                alt="UI/UX Mobile Mockup"
                className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px] "
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">Marketplace Offerings</h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Enable seamless digital payments and smarter decision-making with
              our marketplace solutions. Choose trusted payment providers,
              manage transactions effortlessly, and gain real-time insights to
              grow your business with confidence.
            </p>

            <div className="space-y-6">
              {marketplace.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center  font-semibold group-hover:text-black  gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-22 px-6 md:px-10 lg:px-14 pb-20 pt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">
              SaaS & Fintech Solutions
            </h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Simplify financial operations with our SaaS solutions. Automate
              subscription payments, manage virtual accounts, generate invoices
              effortlessly, and leverage AI-powered modules for smarter
              decision-making.
            </p>

            <div className="space-y-6">
              {saas.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center font-semibold group-hover:text-black gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <img
              src="/images/laptop.webp"
              alt="SaaS / Fintech Mockup"
              className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px]"
            />
          </div>
        </div>

        {/* Third */}
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-22 px-6 md:px-10 lg:px-14 pb-20 pt-10">
          {/* LEFT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/mobile2.webp"
                alt="Smart Banking Mobile App"
                className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">
              Smart Banking Solutions for Business
            </h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              BluFin360 delivers intelligent banking solutions that help
              businesses manage cash flow, streamline payments, and maintain
              financial clarity using AI-powered automation and real-time
              insights.
            </p>

            <div className="space-y-6">
              {banking.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center font-semibold group-hover:text-black gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth */}
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-22 px-6 md:px-10 lg:px-14 pb-20 pt-10">
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">
              Financial Close & Reconciliation
            </h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Simplify and accelerate your financial close process with
              AI-driven reconciliation and intelligent reporting. Our solution
              enhances accuracy, reduces manual effort, and delivers real-time
              visibility across your financial operations.
            </p>

            <div className="space-y-6">
              {financial.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center font-semibold group-hover:text-black gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-2xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE & MOCKUP */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src="/images/board.webp"
                alt="Financial Reconciliation Dashboard"
                className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px]"
              />
            </div>
          </div>
        </div>

        {/* Fifth */}
        <div className="max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-22 px-6 md:px-10 lg:px-14 pb-20 pt-10">
          {/* LEFT SIDE IMAGE & MOCKUP */}
          <div className="flex">
            <div className="relative">
              <img
                src="/images/lap2.webp"
                alt="Quick Financing Mockup"
                className="lg:w-[600px] lg:h-[700px] sm:w-[400px] sm:h-[500px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">
              QuickFlow - OD & Short Term Loan
            </h1>

            <p className="text-black-600 text-[1.125rem] leading-[1.55] font-semibold mb-10">
              Access rapid financing solutions to meet immediate cash needs.
              Effectively manage short-term financial requirements and support
              business growth with flexible loans and overdrafts.
            </p>

            <div className="space-y-6">
              {quickflow.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-[#f0f0f0] pb-4 cursor-pointer group"
                >
                  <span className="flex items-center font-semibold group-hover:text-black gap-5">
                    <span className="text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-black-600">{item}</span>
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    <GoArrowUpRight className="text-3xl" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
