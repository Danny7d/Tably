export interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  popular?: boolean;
  features: string[];
}

export const plans: PricingPlan[] = [
  {
    name: 'Starter',
    monthlyPrice: 8999,
    annualPrice: 8099,
    description: 'Perfect for small restaurants',
    features: [
      '1 Location',
      'Unlimited orders',
      'Basic analytics',
      'Email support',
      'QR code generation',
      'Digital menu',
      'Order management',
    ],
  },
  {
    name: 'Growth',
    monthlyPrice: 24297,
    annualPrice: 21867,
    description: 'For growing restaurants',
    popular: true,
    features: [
      '3 Locations',
      'Unlimited orders',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'Kitchen display system',
      'Waiter dashboard',
      'Staff management',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'For restaurant groups',
    features: [
      'Unlimited locations',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'Training programs',
      'Custom reporting',
      '24/7 phone support',
    ],
  },
];
