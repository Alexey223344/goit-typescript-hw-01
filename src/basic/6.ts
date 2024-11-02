interface Address {
    name: string;
    age: number;
    email: string;
    address?: {
      city: string;
      country: string;
    };
  }
  
  const mango: Address = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
      city: 'New York',
      country: 'USA',
    },
  };
  
  const poly: Address = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
  };
  
  console.log(mango);
  console.log(poly);