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

    // const destroy = (e) => {
    //     e.preventDefault();
    //     console.log('helo');

    //     delete (route('pizzas.destroy', pizza.id),
    //     {
    //         preserveScroll: true,
    //     });
    // };

    return (
        // <section className={className}>
        <form method="POST" onSubmit={submit} className="mt-6 space-y-6">
            <button>Delete</button>
        </form>
        // <form action="/example" >
        //     <input type="hidden" name="_method" value="PUT">
        //     <input type="hidden" name="_token" value="{{ csrf_token() }}">
        // </form>
    );
}
