export interface Buro {
  message: string;
  createdAt: string;
  user: User;
}

interface User {
  name: string,
  lastname: string
}