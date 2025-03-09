import { Link } from '@inertiajs/react'; // ✅ Import Inertia Link

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-lg font-bold">Admin Panel</h2>
            <ul>
                <li><Link href="/admin/dashboard">Dashboard</Link></li>
                <li><Link href="/admin/users">Users</Link></li>
                <li><Link href="/admin/settings">Settings</Link></li>
            </ul>
        </aside>
        
    );
    
}
