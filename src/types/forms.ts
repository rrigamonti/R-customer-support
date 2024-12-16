export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'number' | 'select';
  placeholder?: string;
  options?: { value: string; label: string; }[];
  required?: boolean;
}

export interface FormProps {
  onSubmit: (data: Record<string, any>) => void;
  fields: FormField[];
  submitLabel: string;
}