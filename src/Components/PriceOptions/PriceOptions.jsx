import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "24/7 gym access",
        "Basic equipment usage",
      ],
      price: "$29.99/month",
    },
    {
      id: 2,
      name: "Standard",
      features: [
        "Access to all basic features",
        "Access to group fitness classes",
        "Personalized workout plan",
        "Access to swimming pool",
        "Free WiFi access",
      ],
      price: "$49.99/month",
    },
    {
      id: 3,
      name: "Premium",
      features: [
        "Access to all standard features",
        "Access to sauna and steam room",
        "Towel service",
        "Nutritional consultation",
        "Personal trainer sessions (2x/month)",
      ],
      price: "$79.99/month",
    },
    {
      id: 4,
      name: "Student",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Access to group fitness classes",
      ],
      price: "$24.99/month",
    },
    {
      id: 5,
      name: "Family",
      features: [
        "Access to all basic features",
        "Family locker room access",
        "Discounts on additional services",
      ],
      price: "$99.99/month",
    },
    {
      id: 6,
      name: "Senior",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Senior group fitness classes",
        "Discounts on merchandise",
      ],
      price: "$19.99/month",
    },
    {
      id: 7,
      name: "Corporate",
      features: [
        "Access to all standard features",
        "Corporate locker room access",
        "Discounted rates for group memberships",
      ],
      price: "$69.99/month",
    },
    {
      id: 8,
      name: "Weekend Warrior",
      features: [
        "Access to gym on weekends only",
        "Access to all basic features",
      ],
      price: "$19.99/month",
    },
    {
      id: 9,
      name: "Virtual",
      features: [
        "Access to virtual workout classes",
        "Online fitness coaching",
        "Access to workout tracking app",
      ],
      price: "$14.99/month",
    },
    {
      id: 10,
      name: "Couples",
      features: [
        "Access to all basic features",
        "Shared locker room access",
        "Discounts on couples training sessions",
      ],
      price: "$69.99/month",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl"> Best Prices in the town</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 rounded-2xl border-2">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}

      </div>
    </div>
  );
};

export default PriceOptions;
