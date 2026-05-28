import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Notification = {
  id: string;
  bookId: number;
  message: string;
  isRead: boolean;
};

type NotificationState = {
  notifications: Notification[];
};

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification(
      state,
      action: PayloadAction<Omit<Notification, "id" | "isRead">>,
    ) {
      state.notifications.unshift({
        ...action.payload,
        id: Date.now().toString(),
        isRead: false,
      });
    },
    markAllAsRead(state) {
      state.notifications.forEach(
        (notification) => (notification.isRead = true),
      );
    },
    removeNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      );
    },
    clearNotifications(state) {
      state.notifications = []; // пока не используем, но мб пригодится позже
    },
  },
});

export const {
  addNotification,
  markAllAsRead,
  clearNotifications,
  removeNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
