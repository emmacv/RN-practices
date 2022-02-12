import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");
    const [direction, setDirection] = useState("ltr");

  return (
    <PreviewLayout
      title="Example"
      flexDirectionExample="Example"
      directionValues={["ltr", "rtl"]}
      flexDirectionValues={["column", "row", "row-reverse", "column-reverse"]}
      selectedFlexDirection={flexDirection}
      selectedDirection={direction}
      setSelectedFlexDirection={setflexDirection}
      setSelectedDirection={setDirection}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  title,
  flexDirectionExample,
  directionValues,
  flexDirectionValues,
  selectedFlexDirection,
  setSelectedFlexDirection,
  setSelectedDirection,
  selectedDirection,
  children,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{title}</Text>
    <View style={styles.row}>
      {flexDirectionValues.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedFlexDirection(value)}
          style={[
            styles.button,
            selectedFlexDirection === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedFlexDirection === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.row}>
      {directionValues.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedFlexDirection(value)}
          style={[
            styles.button,
            flexDirectionValues === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              flexDirectionValues === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [flexDirectionExample]: setSelectedFlexDirection }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    flexWrap: 'wrap',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;