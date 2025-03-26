export default function PizzaStatus({ currentStatus }) {
    const statuses = ['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready'];

    const getClass = (status, index) => {
        let baseClasses =
            'w-1/5 bg-gradient-to-b flex items-center justify-center h-20 border-r-2 transition-all';

        if (status === currentStatus) {
            return `${baseClasses} from-red-500 to-red-600 scale-110 rounded shadow-lg`;
        }
    };

    return (
        <div className="flex rounded-full border-4 border-blue-200">
            {statuses.map((status, index) => (
                <div key={index} className={getClass(status, index)}>
                    <p className="text-center font-medium uppercase italic text-white drop-shadow">
                        <span className="block text-3xl font-bold not-italic leading-none">
                            {index + 1}
                        </span>
                        {status}
                    </p>
                </div>
            ))}
        </div>
    );
}
