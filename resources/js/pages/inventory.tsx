import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

interface InventoryItem {
    id: number;
    name: string;
    quantity: number;
}

export default function Inventory({ items }: { items: InventoryItem[] }) {
    const { data, setData, post, processing, reset } = useForm({ name: '', quantity: 1 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/inventory', {
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Inventory', href: '/inventory' }]}>
            <Head title="Inventory" />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold mb-6 text-center">Inventory Management</h1>

                {/* Add Inventory Form */}
                <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
                    <Input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Item Name"
                        required
                    />
                    <Input
                        type="number"
                        value={data.quantity}
                        onChange={(e) => setData('quantity', Number(e.target.value))}
                        placeholder="Quantity"
                        min="1"
                        required
                    />
                    <Button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-700">
                        Add Item
                    </Button>
                </form>

                {/* Inventory List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {items.map((item) => (
                        <Card key={item.id} className="relative p-4 shadow-md">
                            <CardContent className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <form method="POST" action={`/inventory/${item.id}`} className="inline">
                                    <input type="hidden" name="_method" value="DELETE" />
                                    <Button type="submit" variant="destructive">
                                        <Trash2 size={16} />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
