import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-pink flex flex-col gap-10 p-10">
      <h2 className="font-display text-xl font-bold text-white">Experience</h2>

      <div className="flex flex-col max-w-sm gap-6 p-4 bg-white rounded shadow">
        <div>
          <span className="font-display block mb-2 text-lg font-semibold">
            Bantotal
          </span>
          <span className=" block text-sm font-medium">
            React Native developer
          </span>

          <span className=" block text-xs">from 2021-05 to this date</span>
        </div>

        <p className="text-sm">
          Development of banking apps for iOS an Android devices
        </p>
      </div>
    </section>
  );
}
