export type Task = {
    id: number;
    name: string;
    start: string;
    end: string;
    reminderTime?: number; // Added reminder capabilities
    isReminder?: boolean;
}