export default {
  meals: [
    {
      id: 1,
      name: 'Akara',
      price: 1500,
    },
    {
      id: 2,
      name: 'Amala',
      price: 2500,
    },
    {
      id: 3,
      name: 'Pounded Yam',
      price: 3500,
    },
    {
      id: 4,
      name: 'Yam With Fried Eggs',
      price: 2400,
    },
    {
      id: 5,
      name: 'Beans',
      price: 1500,
    },
  ],
  menu: [
    {
      id: 1,
      name: 'Greasy Sae Kitchen',
      meals: [
        {
          id: 1,
          name: 'Akara',
          price: 1500,
        },
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
        {
          id: 3,
          name: 'Pounded Yam',
          price: 3500,
        },
        {
          id: 4,
          name: 'Yam With Fried Eggs',
          price: 2400,
        },
        {
          id: 5,
          name: 'Beans',
          price: 1500,
        },
      ],
    },
    {
      id: 2,
      name: 'Honeydukes',
      meals: [
        {
          id: 1,
          name: 'Akara',
          price: 1500,
        },
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
        {
          id: 3,
          name: 'Pounded Yam',
          price: 3500,
        },
        {
          id: 4,
          name: 'Yam With Fried Eggs',
          price: 2400,
        },
        {
          id: 5,
          name: 'Beans',
          price: 1500,
        },
      ],
    },
    {
      id: 3,
      name: 'Leaky Cauldron',
      meals: [
        {
          id: 1,
          name: 'Akara',
          price: 1500,
        },
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
        {
          id: 3,
          name: 'Pounded Yam',
          price: 3500,
        },
        {
          id: 4,
          name: 'Yam With Fried Eggs',
          price: 2400,
        },
        {
          id: 5,
          name: 'Beans',
          price: 1500,
        },
      ],
    },
    {
      id: 4,
      name: 'The Three Broomsticks',
      meals: [
        {
          id: 1,
          name: 'Akara',
          price: 1500,
        },
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
        {
          id: 3,
          name: 'Pounded Yam',
          price: 3500,
        },
        {
          id: 4,
          name: 'Yam With Fried Eggs',
          price: 2400,
        },
        {
          id: 5,
          name: 'Beans',
          price: 1500,
        },
      ],
    },
    {
      id: 5,
      name: 'The Queen\'s Blessing',
      meals: [
        {
          id: 1,
          name: 'Akara',
          price: 1500,
        },
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
        {
          id: 3,
          name: 'Pounded Yam',
          price: 3500,
        },
        {
          id: 4,
          name: 'Yam With Fried Eggs',
          price: 2400,
        },
        {
          id: 5,
          name: 'Beans',
          price: 1500,
        },
      ],
    },
  ],
  orders: [
    {
      id: 1,
      meals: [
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
      ],
      customerName: 'Harry Potter',
      catererName: 'Honeydukes',
      orderStatus: 'DISPATCHED',
    },
    {
      id: 2,
      meals: [
        {
          id: 2,
          name: 'Amala',
          price: 2500,
        },
      ],
      customerName: 'Rand Al\'Athor',
      catererName: 'The Queen\'s Blessing',
      orderStatus: 'BEING PROCESSED',
    },
  ],
};
