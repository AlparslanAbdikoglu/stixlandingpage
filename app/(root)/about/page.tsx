"use client";
import React from "react";
import BackToTopButton from "@/components/backtotopbutton";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="flex space-x-8 mt-8">
      <div>{/* SVG */}</div>
      <div>
        <h4 className="text-xl font-bold text-gray-700">{question}</h4>
        <p className="text-rose-600 my-2 text-lg">{answer}</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <main>
        <div className="bg-white rounded-lg shadow-xl py-8 mt-12">
          <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
            FAQ
          </h4>
          <p className="text-center text-indigo-900 text-lg mt-2">
            Here are some of the frequently asked questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
            {faqItems.map((item, index) => (
              <FaqItem key={index} {...item} />
            ))}
            {/* Button */}
          </div>
          <div className="flex justify-center mt-8">
            <BackToTopButton />
          </div>
        </div>
      </main>
    </div>
  );
};

const faqItems = [
  {
    question: "1. How does the picture uploading process work?",
    answer:
      "Our picture uploading process is simple and intuitive. You can easily upload your pictures directly from your device. Once uploaded, you'll have access to a variety of editing tools, including cropping, adding stickers, and more.",
  },
  {
    question: "2. Can I add stickers to my pictures?",
    answer:
      "Absolutely! Our platform offers access to over 150,000 stickers from talented indie designers through our API integration. You can browse through a wide range of stickers and add them to your pictures to make them more fun and engaging.",
  },
  {
    question: "3. Is there a limit to the number of pictures I can edit?",
    answer:
      "We offer a free tier that allows users to edit a certain number of pictures without any cost. However, once you reach the limit of free edits, you can purchase credits to continue using our services.",
  },
  {
    question: "4. How can I crop my pictures?",
    answer:
      "Our platform provides an easy-to-use cropping tool that allows you to crop your pictures with precision. Simply select the desired area of the image and apply the crop. You can also adjust the aspect ratio and rotation to achieve the perfect crop.",
  },
  {
    question: "5. Can I save my edited pictures?",
    answer:
      "Yes, you can save your edited pictures directly to your device or share them right away with friends!",
  },
  {
    question: "6. Are there any restrictions on the usage of stickers?",
    answer:
      "While you have access to a vast library of stickers, we do have guidelines in place to ensure that the usage of stickers complies with our community standards. We encourage creativity and originality while using stickers and expect users to respect the intellectual property rights of the designers.",
  },
  {
    question: "7. How does the credit system work?",
    answer:
      "Our credit system is usage-based. Once you exhaust the free edits included in your account, you can purchase credits to unlock additional editing features. Credits are used on a per-edit basis, allowing you to customize and enhance your pictures according to your needs.",
  },
  {
    question: "8. How secure is my data on your platform?",
    answer:
      "We take data security and privacy seriously. Your uploaded pictures and personal information are encrypted and stored securely on our servers. We adhere to strict security protocols to ensure that your data remains safe and protected at all times. Your pictures get deleted after a time period automatically.",
  },
  {
    question: "9. How can I get help or support if I encounter any issues?",
    answer:
      "If you have any questions, encounter technical issues, or need assistance with our platform, our support team is here to help. You can reach out to us through our contact page.",
  },
];

export default Page;
