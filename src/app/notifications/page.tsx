"use client";

import { getNotifications } from "@/actions/notification.action";
import { NotificationsSkeleton } from "@/components/NotificationSkeleton";
import { useEffect, useState } from "react";

type Notifications = Awaited<ReturnType<typeof getNotifications>>;
type Notification = Notifications[number];

function NotificationsPage() {
  const [notifications, Setnotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {};
    fetchNotifications();
  });

  if (isLoading) return <NotificationsSkeleton />;
  return <div></div>;
}

export default NotificationsPage;
