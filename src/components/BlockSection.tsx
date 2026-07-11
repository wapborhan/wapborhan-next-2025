type Props = { children: any };

function BlockSection({ children }: Props) {
  return (
    <div className="px-4 md:px-0">
      <div className="font-sans w-full md:max-w-5xl mx-auto border-x border-border py-2 md:py-4 px-2 md:px-4">
        <div className="w-auto border-y border-border my-10 px-10">
          <div className="w-auto h-[calc(100%+5rem)] border-x border-border -mt-10 -mb-10 py-10 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockSection;
