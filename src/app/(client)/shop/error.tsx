"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto py-6 sm:py-10">
      <h1 className="text-3xl sm:text-5xl mb-10 sm:mb-20">Shop Sale</h1>
      <div className="w-full h-[40vh] flex justify-center items-center">
        <h4 className="italic text-2xl">{error.message}</h4>
      </div>
    </div>
  );
}
