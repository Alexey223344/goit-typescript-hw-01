export enum UsersOne {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  const RoleDescription: Record<UsersOne, string> = {
    [UsersOne.admin]: 'Admin User',
    [UsersOne.editor]: 'Editor User',
    [UsersOne.guest]: 'Guest User',
  };
  
  console.log(RoleDescription);