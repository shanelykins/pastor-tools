export function logEvent(event: string, details: Record<string, any>) {
  console.log(`Event: ${event}`, details);
  // Here you could integrate with a real analytics service
}
