import { useForm } from '@inertiajs/react';

export default function DeletePizza({ pizza }) {
    console.log(pizza);
    const { delete: destroy } = useForm({
        id: pizza.id,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(pizza);

        destroy(pizza.id),
            {
                preserveScroll: true,
            };
    };

    return (
        <form method="POST" onSubmit={submit} className="mt-6 space-y-6">
            <button>Delete</button>
        </form>
    );
}
