export type SessionType = "focus" | "break" | "long_break";

export interface PomodoroSettings {
  id: string;
  user_id: string;
  focus_duration: number;
  short_break_duration: number;
  long_break_duration: number;
  sessions_before_long_break: number;
  auto_start_focus: boolean;
  auto_start_break: boolean;
}

export interface PomodoroSettingsUpdate {
  focus_duration?: number;
  short_break_duration?: number;
  long_break_duration?: number;
  sessions_before_long_break?: number;
  auto_start_focus?: boolean;
  auto_start_break?: boolean;
}
