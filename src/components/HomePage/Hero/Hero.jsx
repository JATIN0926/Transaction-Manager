import { Button } from "flowbite-react";
import React from "react";

const Hero = () => {
  return (
    <div className="w-screen max-w-full flex items-center justify-center gap-3">
      <div className="flex flex-col items-start justify-center gap-4">
        <Button gradientMonochrome="purple">Get Started Now</Button>
        <h1 className="text-4xl font-semibold">
          Manage Your <span className="text-[#712FFF]">Finances</span>{" "}
          Effortlessly
        </h1>
        <p className="text-xl">
          Take control of your personal or business finances with our intuitive
          transaction manager. Track your income and expenses, visualize your
          financial data with detailed charts, and make informed decisions to
          achieve your financial goals. Simplify your financial management
          today.
        </p>
      </div>
      <img src="/hero.png" alt="" className="w-[40%] aspect-square " />
    </div>
  );
};

export default Hero;
