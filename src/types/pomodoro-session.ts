import type { SessionType } from "./pomodoro-settings";

export interface PomodoroSession {
  id: string;
  user_id: string;
  started_at: string;
  session_type: SessionType;
  ended_at: string | null;
  planned_duration: number;
  actual_duration: number | null;
  completed: boolean;
}

export interface PomodoroSessionCreate {
  session_type: SessionType;
  planned_duration: number;
}

export interface PomodoroSessionUpdate {
  completed?: boolean;
}
