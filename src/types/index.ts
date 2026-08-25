export type Variables = Record<string, string>;

export interface TokenData {
  email: string;
  expira: number;
}

export interface SendPasswordBody {
  system: string;
  email: string;
  password: string;
}
