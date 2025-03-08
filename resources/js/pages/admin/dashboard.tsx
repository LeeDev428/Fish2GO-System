import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const wdwd: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
];

export default function AdminDashboard() {
    return (
        <AppLayout breadcrumbs={wdwd}>
            <Head title="Admin Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                {/* Top Stats Section */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="p-6 border rounded-xl bg-white shadow-md dark:bg-gray-900">
                        <h2 className="text-lg font-bold">Total Users</h2>
                        <p className="text-3xl font-semibold">1,245</p>
                    </div>
                    <div className="p-6 border rounded-xl bg-white shadow-md dark:bg-gray-900">
                        <h2 className="text-lg font-bold">New Signups</h2>
                        <p className="text-3xl font-semibold">27</p>
                    </div>
                    <div className="p-6 border rounded-xl bg-white shadow-md dark:bg-gray-900">
                        <h2 className="text-lg font-bold">Active Admins</h2>
                        <p className="text-3xl font-semibold">5</p>
                    </div>
                    <div className="p-6 border rounded-xl bg-white shadow-md dark:bg-gray-900">
                        <h2 className="text-lg font-bold">System Uptime</h2>
                        <p className="text-3xl font-semibold">99.8%</p>
                    </div>
                </div>

                {/* Admin Controls */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video border rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <h3 className="p-4 text-lg font-bold">Manage Users</h3>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video border rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <h3 className="p-4 text-lg font-bold">View Reports</h3>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video border rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <h3 className="p-4 text-lg font-bold">System Settings</h3>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>

                {/* Activity Log */}
                <div className="border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <h3 className="p-4 text-lg font-bold">Recent Admin Activity</h3>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>

            </div>
        </AppLayout>
    );
}
