export default function EmptySection({section} : {section: string}) {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <h4 className="italic text-2xl">Could not retrieve {section} Items 😔</h4>
    </div>
  );
}
