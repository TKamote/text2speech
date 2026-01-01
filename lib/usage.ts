/**
 * Count words in a text string
 */
export function countWords(text: string): number {
  if (!text || text.trim().length === 0) {
    return 0
  }

  // Remove extra whitespace and split by spaces
  const words = text.trim().split(/\s+/)
  
  // Filter out empty strings
  return words.filter(word => word.length > 0).length
}

/**
 * Check if usage reset is needed (based on usageResetDate)
 */
export function shouldResetUsage(resetDate: Date): boolean {
  const now = new Date()
  return now >= resetDate
}

/**
 * Get next month start date (1st of next month)
 */
export function getNextMonthStart(): Date {
  const nextMonth = new Date()
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  nextMonth.setDate(1)
  nextMonth.setHours(0, 0, 0, 0)
  return nextMonth
}

