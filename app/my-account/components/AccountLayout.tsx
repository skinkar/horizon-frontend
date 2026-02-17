interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export default function AccountLayout({ sidebar, content }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex gap-8">
      {/* LEFT SIDEBAR */}
      <div className="w-[260px]">{sidebar}</div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 bg-white rounded-xl p-8 shadow-sm">
        {content}
      </div>
    </div>
  );
}
