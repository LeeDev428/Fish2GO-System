import AdminLayout from '@/layouts/admin-layout'; // ✅ Corrected import
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout title="Admin Dashboard">
            <Head title="Admin Dashboard" />
            <div className="p-6">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
        </AdminLayout>
    );
    
}
