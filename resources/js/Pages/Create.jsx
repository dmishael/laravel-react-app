import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreatePizzaOrderForm from './Pizzas/Partials/CreatePizzaOrderForm';

export default function Create() {
    console.log('hello');
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <CreatePizzaOrderForm />
        </AuthenticatedLayout>
    );
}
