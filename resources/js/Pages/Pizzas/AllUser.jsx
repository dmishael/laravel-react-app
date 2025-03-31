import Table from '@/Components/Table.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const columns = ['size', 'chef', 'status'];

export default function AllUser({ auth, pizzas }) {
    // user={auth.user}
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="All Pizzas" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <h1 className="p-6 text-center text-2xl font-bold">
                            {auth.user.name + `'s`} Pizza Orders
                        </h1>
                        <div className="p-6 text-gray-900">
                            <Table
                                items={pizzas}
                                columns={columns}
                                primary="Order Number"
                                action="pizzas.edit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
