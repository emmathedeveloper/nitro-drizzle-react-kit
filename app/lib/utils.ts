import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (num: number) => Intl.NumberFormat('en-US' , {
  currency: 'NGN',
  style: 'currency'
}).format(num)

export const wait = (ms = 1000) => new Promise(res => setTimeout(res , ms))