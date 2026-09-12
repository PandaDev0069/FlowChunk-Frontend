import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getPomodoroSettings,
  updatePomodoroSettings,
} from "../lib/pomodoro_settings";
import type { PomodoroSettingsUpdate } from "../types/pomodoro-settings";

export function usePomodoroSettings() {
  return useQuery({
    queryKey: ["pomodoro-settings"],
    queryFn: getPomodoroSettings,
  });
}

export function useUpdatePomodoroSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updated_settings: PomodoroSettingsUpdate) =>
      updatePomodoroSettings(updated_settings),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pomodoro-settings"],
      });
    },
  });
}
