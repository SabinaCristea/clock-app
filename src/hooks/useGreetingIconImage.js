import { useEffect, useState } from "react";

export default function useGreetingIconImage() {
  const [greeting, setGreeting] = useState("");
  const [icon, setIcon] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let newGreeting = "";
    let newIcon = "";
    let newImage = "";
    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Good morning";
      newIcon = "sun";
      newImage = "day";
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = "Good afternoon";
      newIcon = "sun";
      newImage = "day";
    } else {
      newGreeting = "Good evening";
      newIcon = "moon";
      newImage = "night";
    }

    setGreeting(newGreeting);
    setIcon(newIcon);
    setImage(newImage);
  }, []);

  return { greeting, icon, image };
}
