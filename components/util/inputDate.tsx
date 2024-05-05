import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { TextInput, Pressable, StyleSheet } from "react-native";

interface InputDateProps {
  onClick: (date: Date) => void;
}

const InputDate: React.FC<InputDateProps> = ({ onClick }) => {
  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [showDate, setShowDate] = useState(false);
  const [textDate, setTextDate] = useState("");

  const insertTanggalpendirian = (event: any, select: Date | undefined) => {
    if (select) {
      setShowDate(false);
      onClick(select);
      const dateChoose = new Date(select);
      const hari = dateChoose.getDate();
      const bulanNumber = dateChoose.getMonth();
      const bulanName = bulanIndonesia.filter(
        (val, ind) => ind === bulanNumber && val
      )[0];
      const tahun = dateChoose.getFullYear();
      setTextDate(`${hari} - ${bulanName} - ${tahun}`);
    }
  };

  const setDatepanel = () => {
    setShowDate(true);
  };

  return (
    <Pressable onPress={setDatepanel}>
      <TextInput
        keyboardType="default"
        inputMode="text"
        editable={false}
        placeholderTextColor="#000"
        style={styles.inputStyle}
        value={textDate}
      />
      {showDate && (
        <DateTimePicker
          testID="tanggalPendirianusahas"
          value={new Date()}
          mode="date"
          onChange={insertTanggalpendirian}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#bbb",
    borderWidth: 2,
    color: "#000",
  },
});

export default InputDate;
