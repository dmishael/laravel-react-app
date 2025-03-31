import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput.jsx';
import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
// import { Transition } from '@headlessui/react';

export default function CreatePizzaOrderForm() {
    const user = usePage().props.auth.user;
    console.log(user);

    const [pizza, setValues] = useState({
        user_id: user.id,
        size: '',
        crust: '',
        status: 'Ordered',
        toppings: '',
    });

    const { post: create } = useForm({});

    useEffect(() => {
        console.log(pizza);
    }, [pizza]);

    function handleChange(e) {
        console.log(e);
        const key = e.target.id;
        const value = e.target.value;
        setValues((pizza) => ({
            ...pizza,
            [key]: value,
        }));
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(pizza);

        create(route('pizzas.create', pizza), {
            preserveScroll: true,
        });
    };

    // const statusOptions = [
    //     'Ordered',
    //     'Prepping',
    //     'Baking',
    //     'Checking',
    //     'Ready',
    // ];

    const toppingChoices = [
        'Extra Cheese',
        'Black Olives',
        'Pepperoni',
        'Sausage',
        'Anchovies',
        'Jalapenos',
        'Onion',
        'Chicken',
        'Ground Beef',
        'Green Peppers',
    ];

    const size = ['Small', 'Medium', 'Large', 'Extra-Large'];

    const crust = ['Regular', 'Thin', 'Garlic'];

    return (
        <section className="">
            <form action="POST" className="mt-6 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <SelectInput
                        id="size"
                        className="w-half mt-1"
                        options={size}
                        onChange={handleChange}
                        value={pizza.size}
                        // disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <SelectInput
                        id="crust"
                        className="w-half mt-1"
                        options={crust}
                        onChange={handleChange}
                        value={pizza.crust}
                        // disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <SelectInput
                        id="toppings"
                        className="w-half mt-1"
                        options={toppingChoices}
                        onChange={handleChange}
                        value={pizza.toppings}
                        // disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="w-half mt-1"
                        value={''}
                        disabled
                    />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton>Save Changes</PrimaryButton>
                </div>
            </form>
        </section>
    );
}
