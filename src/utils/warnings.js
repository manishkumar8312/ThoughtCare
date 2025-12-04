/**
 * Utility function for conditional warnings
 * @param {boolean} condition - The condition to check
 * @param {string} message - Warning message to display
 */
export function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") {
    console.warn(message);
    }
    try {
      throw new Error(message);
    } catch (e) {
      // Silently handle the error - we just wanted to log the warning
    }
  }
}

/**
 * Development-only warning function
 * @param {boolean} condition - The condition to check
 * @param {string} message - Warning message to display
 */
export function devWarning(cond, message) {
  if (process.env.NODE_ENV !== 'production') {
    warning(cond, message);
  }
}
