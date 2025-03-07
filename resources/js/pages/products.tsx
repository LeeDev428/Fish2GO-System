import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Product {
    id: number;
    name: string;
}

export default function Products({ products }: { products: Product[] }) {
    const { data, setData, post, processing, reset } = useForm({ name: '' });
    const [menuOpen, setMenuOpen] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/products', {
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Products', href: '/products' }]}> 
            <Head title="Products" />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold mb-6 text-center">Product Management</h1>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
                    <Input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Enter product name"
                        className="flex-1"
                        required
                    />
                    <Button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-700">
                        {processing ? <Loader2 className="animate-spin" /> : 'Add Product'}
                    </Button>
                </form>

                {/* Product List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Card key={product.id} className="relative shadow-md p-4">
                            <button
                                onClick={() => setMenuOpen(menuOpen === product.id ? null : product.id)}
                                className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 focus:outline-none"
                            >
                                <MoreVertical size={14} />
                            </button>
                            {menuOpen === product.id && (
                                <div className="absolute top-10 right-2 bg-white shadow-lg border rounded-lg p-2 flex flex-col w-22 h-22 text-xs">
                                    <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded">
                                        <Pencil size={15} /> Edit
                                    </button>
                                    <button className="flex items-center gap-2 p-2 text-red-600 hover:bg-red-100 rounded mt-1">
                                        <Trash2 size={15} /> Delete
                                    </button>
                                </div>
                            )}
                            <CardContent className="text-center font-medium text-lg">
                                {product.name}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
