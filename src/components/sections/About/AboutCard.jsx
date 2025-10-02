export function AboutCard({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center w-1/3 p-4 h-full">
      <div className="flex items-center justify-center rounded-full mb-4">
        <Icon className="w-12 h-12 text-text" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-text text-sm mt-2 flex-1">{description}</p>
    </div>
  );
}
