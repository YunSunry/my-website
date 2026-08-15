import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← 返回首页
        </Link>
        <h1 className="text-4xl font-bold mb-4">精选项目 (Projects)</h1>
        <p className="text-gray-600 leading-relaxed">
          这里是项目展示页面，你可以在这里添加更多碳纤维高性能客船的案例与图片。
        </p>
      </div>
    </div>
  );
}