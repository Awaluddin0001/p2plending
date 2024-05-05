import React, { useEffect } from "react";
import { Text, View } from "react-native";

interface CountdownProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Countdown: React.FC<CountdownProps> = ({ time, setTime }) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000); // Decrease time every 1000 milliseconds (1 second)
    }

    return () => {
      // Cleanup the timer when the component unmounts
      clearTimeout(timer);
    };
  }, [time, setTime]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <View style={{ marginTop: 10 }}>
      <Text>
        {`sisa waktu penginputan OTP ${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
      </Text>
    </View>
  );
};

export default Countdown;
