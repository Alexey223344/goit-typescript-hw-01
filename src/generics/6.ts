type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
  };
  
  type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
  };
  
  type Params = Omit<Form, 'errors'>;
  
  
  const test: Params = {
    email: 'string | null;',
    firstName: 'string',
    lastName: 'string | null;',
    phone: 'string | null;',
  };
  
  console.log(test);