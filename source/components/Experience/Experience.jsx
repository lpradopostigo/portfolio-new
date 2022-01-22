import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col gap-10 p-10 bg-pink"
    >
      <h2 className="text-xl font-display font-bold text-white">Experience</h2>

      <div className="bg-white shadow rounded flex flex-col max-w-sm p-4 gap-6">
        <div>
          <span className="block font-semibold font-display text-lg mb-2">
            Bantotal
          </span>
          <span className="block font-medium text-sm ">
            React Native developer
          </span>

          <span className="block text-xs ">from 2021-05 to this date</span>
        </div>

        <p className="text-sm">
          Development of banking apps for iOS an Android devices
        </p>
      </div>
    </section>
  );
}
