export const useCurrentUser = () => useState<string | null>('counter', () => null)
export const useCounter = () => useState<number>('qcount', () => 0)
export const useTopic = () => useState<string | null>('topic', () => null)