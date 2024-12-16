export interface ContactInfo {
  phone: {
    uk: string;
  };
  address: {
    street: string;
    city: string;
    country: string;
  };
  email: string;
}

export interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export * from './calculator';
export * from './forms';