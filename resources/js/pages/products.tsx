import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

export default function Products() {
    return (
        <AppLayout breadcrumbs={[{ title: 'Products', url: '/products' }]}>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <p>Welcome to the Products page.</p>
            </div>
        </AppLayout>
    );
}
