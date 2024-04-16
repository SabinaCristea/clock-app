import { useEffect, useState } from "react";

export default function useGreeting() {
  const [greeting, setGreeting] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let newGreeting = "";
    let newIcon = "";
    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Good morning";
      newIcon = "sun";
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = "Good afternoon";
    } else {
      newGreeting = "Good evening";
      newIcon = "moon";
    }

    setGreeting(newGreeting);
    setIcon(newIcon);
  }, []);

  return { greeting, icon };
}
