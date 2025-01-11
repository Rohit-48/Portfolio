import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  try {
    return twMerge(clsx(inputs))
  } catch (error) {
    console.error('Error merging classes:', error)
    return ''
  }
}

// Add date formatter utility
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
