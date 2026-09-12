import { apiFetch } from "./api";

import type {
  PomodoroSession,
  PomodoroSessionCreate,
  PomodoroSessionUpdate,
} from "../types/pomodoro-session";

export function getPomodoroSessions() {
  return apiFetch<PomodoroSession[]>("/pomodoro/sessions");
}

export function createPomodoroSession(data: PomodoroSessionCreate) {
  return apiFetch<PomodoroSession>("/pomodoro/sessions", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updatePomodoroSession(
  session_id: string,
  updated_session: PomodoroSessionUpdate,
) {
  return apiFetch<PomodoroSession>(`/pomodoro/sessions/${session_id}`, {
    method: "PATCH",
    body: JSON.stringify(updated_session),
  });
}

export function getActivePomodoroSession(session_id: string) {
  return apiFetch<PomodoroSession>(`/pomodoro/sessions/${session_id}/active`);
}
