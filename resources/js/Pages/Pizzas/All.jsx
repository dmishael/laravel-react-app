import Table from '@/Components/Table.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const columns = ['size', 'chef', 'status'];
// const action = 'pizzas.edit';

export default function All({ auth, pizzas }) {
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
                        <a
                            href={route('pizzas.query', auth.user)}
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            My Zas
                        </a>
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
