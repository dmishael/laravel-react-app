import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdatePizzaOrderForm from '@/Pages/Pizzas/Partials/UpdatePizzaOrderForm.jsx';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, pizza }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Order #{pizza.id}
                </h2>
            }
        >
            <Head title={'Order #' + pizza.id} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePizzaOrderForm
                            pizza={pizza}
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
