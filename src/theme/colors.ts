interface IColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  border: string;
  danger: string;
  dangerDark: string;
  gary: string;
  black: string;
  white: string;
  text: string;
}

const colors: IColors = {
  primary: "#3f51b5",
  primaryDark: "#2c387e",
  primaryLight: "#6573c3",
  secondary: "#f50057",
  secondaryDark: "#ab003c",
  secondaryLight: "#f733378",
  border: "#cdced2",
  danger: "#ed1c24",
  dangerDark: "#a50d12",
  gary: "#6b6b6b",
  black: "#000000",
  white: "#ffffff",
  text: "#000000",
} as const;
export default colors;
