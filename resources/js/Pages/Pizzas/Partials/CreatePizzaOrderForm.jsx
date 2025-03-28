import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput.jsx';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
// import { Transition } from '@headlessui/react';

export default function CreatePizzaOrderForm() {
    const { post } = useForm({});

    const [pizza, setValues] = useState({
        id: '',
        user_id: '',
        size: '',
        crust: '',
        status: '',
        toppings: '',
    });

    function handleChange(e) {
        console.log(e);
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);

        post(route('pizzas.create', pizza), {
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
                        id="t"
                        className="w-half mt-1"
                        options={size}
                        onChange={(e) => handleChange('size', e.target.value)}
                        // value={data.size}
                        // disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <SelectInput
                        id="t"
                        className="w-half mt-1"
                        options={crust}
                        onChange={(e) => handleChange('crust', e.target.value)}
                        // value={data.size}
                        // disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <SelectInput
                        id="t"
                        className="w-half mt-1"
                        options={toppingChoices}
                        onChange={(e) =>
                            handleChange('toppings', e.target.value)
                        }
                        // value={data.size}
                        // disabled
                    />
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="t"
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
