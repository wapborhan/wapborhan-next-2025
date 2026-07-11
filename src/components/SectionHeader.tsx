type Props = { title: string };

function SectionHeader({ title }: Props) {
  return (
    <div className="w-full border-y border-border px-4 md:px-0">
      <div className="w-full md:max-w-5xl mx-auto border-x border-border flex justify-center items-center py-4 px-14">
        <h1 className="text-lg">{title}</h1>
      </div>
    </div>
  );
}

export default SectionHeader;
