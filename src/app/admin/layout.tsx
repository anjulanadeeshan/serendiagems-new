import { LayoutDashboard, Images, Package, Shapes, Diamond, Layers, Globe, User } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 left-0 z-50">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-xl font-serif font-bold text-gray-900">
                            Serendia<span className="text-[#b38e5d]">.</span>
                        </Link>
                        <p className="text-xs text-gray-400 mt-1 tracking-widest uppercase">Admin Panel</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/slider-manager"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors"
                    >
                        <Images className="w-5 h-5" />
                        Manage Slide Images
                    </Link>
                    <Link
                        href="/admin/products"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors"
                    >
                        <Package className="w-5 h-5" />
                        Manage Products
                    </Link>
                    <Link
                        href="/admin/categories"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors"
                    >
                        <Shapes className="w-5 h-5" />
                        Manage Categories
                    </Link>
                    <Link
                        href="/admin/types"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors"
                    >
                        <Diamond className="w-5 h-5" />
                        Manage Types
                    </Link>
                    <Link
                        href="/admin/shapes"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors"
                    >
                        <Layers className="w-5 h-5" />
                        Manage Shapes
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-100">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-slate-50 hover:text-[#b38e5d] transition-colors mb-2"
                    >
                        <Globe className="w-5 h-5" />
                        Go to Live Site
                    </Link>

                    <div className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 border-t border-slate-100 mt-2 pt-4">
                        <User className="w-5 h-5" />
                        <span>Admin</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto ml-64">
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
