import { ReactNode } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Sidebar from '@/components/admin/sidebar';
import Navbar from '@/components/admin/navbar';

interface AdminLayoutProps {
    title?: string;
    children: ReactNode;
}

export default function AdminLayout({ title, children }: AdminLayoutProps) {
    const { post } = useForm();

    const handleLogout = () => {
        post(route('logout'));
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="p-6">
                    {title && <Head title={title} />}
                    {children}
                </main>

                {/* Logout Button using POST request */}
                <div className="p-4">
                    <button 
                        onClick={handleLogout} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
