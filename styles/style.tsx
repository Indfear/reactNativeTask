import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  flexColumnNormal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },

  headerView: {
    height: 250,
    backgroundColor: "#595959",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  },

  headerNavigation: {
    height: 50,
    backgroundColor: "#595959"
  },

  contentView: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch"
  },

  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },

  repositoryImage: {
    width: 75,
    height: 75
  },

  title: {
    fontWeight: "bold",
    fontSize: 20
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center"
  },

  textContainer: {
    padding: 10
  },

  basicText: {
    color: "white",
  },

  basicContainer: {
    flex: 1,
    borderColor: "lightgrey",
    borderWidth: 1
  },

  basicContainerWithoutBorder: {
    flex: 1
  },

  textCentered: {
    textAlign: "center"
  },

  marginBottom: {
    marginBottom: 10
  },

  textWithIcon: {
      flexDirection: "row",
      justifyContent: "flex-start",
      textAlign:"left",
      padding: 5
  },

  textWithIconReverse: {
    flexDirection: "row",
      justifyContent: "flex-end",
      textAlign:"right",
      padding: 5
  },

  textAlignRight: {
    textAlign: "right"
  }
});
