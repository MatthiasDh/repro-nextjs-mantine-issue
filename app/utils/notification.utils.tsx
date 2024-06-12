import { rem } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconSquareX } from "@tabler/icons-react";

class NotificationUtils {
  static showErrorMessage = (description: string) => {
    notifications.show({
      color: "red",
      title: "Something went wrong :(",
      message: description,
      icon: <IconSquareX style={{ width: rem(18), height: rem(18) }} />,
      loading: false,
      autoClose: 3000,
    });
  };

  static showSuccessMessage = (description: string, title?: string) => {
    notifications.show({
      color: "green",
      title: title ?? "This was a success!",
      message: description,
      icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
      loading: false,
      autoClose: 3000,
    });
  };
}

export default NotificationUtils;
