import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getPomodoroSessions,
  createPomodoroSession,
  updatePomodoroSession,
  getActivePomodoroSession,
} from "../lib/pomodoro_session";
import type {
  PomodoroSessionCreate,
  PomodoroSessionUpdate,
} from "../types/pomodoro-session";

export function usePomodoroSessions() {
  return useQuery({
    queryKey: ["pomodoro-sessions"],
    queryFn: getPomodoroSessions,
  });
}

export function useActivePomodoroSession(session_id: string | null) {
  return useQuery({
    queryKey: ["active-pomodoro-session", session_id],
    queryFn: () => getActivePomodoroSession(session_id!),
    enabled: session_id !== null,
  });
}

export function useCreatePomodoroSession() {
  return useMutation({
    mutationFn: (new_session: PomodoroSessionCreate) =>
      createPomodoroSession(new_session),
  });
}

export function useUpdatePomodoroSession() {
  return useMutation({
    mutationFn: ({
      session_id,
      updated_session,
    }: {
      session_id: string;
      updated_session: PomodoroSessionUpdate;
    }) => updatePomodoroSession(session_id, updated_session),
  });
}
