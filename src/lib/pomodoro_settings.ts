import { apiFetch } from "./api";

import type {
  PomodoroSettings,
  PomodoroSettingsUpdate,
} from "../types/pomodoro-settings";

export function getPomodoroSettings() {
  return apiFetch<PomodoroSettings>("/pomodoro/settings");
}

export function updatePomodoroSettings(
  updated_settings: PomodoroSettingsUpdate,
) {
  return apiFetch<PomodoroSettings>("/pomodoro/settings", {
    method: "PATCH",
    body: JSON.stringify(updated_settings),
  });
}
