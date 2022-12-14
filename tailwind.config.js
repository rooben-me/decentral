/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        grey: {
          // Gray
          1: "#ffffff",
          2: "#F5F6FB",
          3: "#E4E8EF",
          4: "#B0BEC5",
          5: "#90A4AE",
          6: "#78909C",
          DEFAULT: "#78909C",
          7: "#546E7A",
          8: "#455A64",
          9: "#263238",
          10: "#263238",
        },
        blue: {
          // Daybreak Blue
          1: "#E6F7FF",
          2: "#BAE7FF",
          3: "#91D5FF",
          4: "#69C0FF",
          5: "#40A9FF",
          6: "#1890FF",
          DEFAULT: "#1890FF",
          7: "#096DD9",
          8: "#0050B3",
          9: "#003A8C",
          10: "#002766",
        },
        red: {
          // Dust red
          1: "#FFF1F0",
          2: "#FFCCC7",
          3: "#FFA39E",
          4: "#FF7875",
          5: "#FF4D4F",
          6: "#F5222D",
          DEFAULT: "#F5222D",
          7: "#CF1322",
          8: "#A8071A",
          9: "#820014",
          10: "#5C0011",
        },
        volcano: {
          1: "#FFF2E8",
          2: "#FFD8BF",
          3: "#FFBB96",
          4: "#FF9C6E",
          5: "#FF7A45",
          6: "#FA541C",
          DEFAULT: "#FA541C",
          7: "#D4380D",
          8: "#AD2102",
          9: "#871400",
          10: "#610B00",
        },
        orange: {
          // Sunset orange
          1: "#FFF7E6",
          2: "#FFE7BA",
          3: "#FFD591",
          4: "#FFC069",
          5: "#FFA940",
          6: "#FA8C16",
          DEFAULT: "#FA8C16",
          7: "#D46B08",
          8: "#AD4E00",
          9: "#873800",
          10: "#612500",
        },
        gold: {
          // Calendula Gold
          1: "#FFFBE6",
          2: "#FFF1B8",
          3: "#FFE58F",
          4: "#FFD666",
          5: "#FFC53D",
          6: "#FAAD14",
          DEFAULT: "#FAAD14",
          7: "#D48806",
          8: "#AD6800",
          9: "#874D00",
          10: "#613400",
        },
        yellow: {
          // Sunrise Yellow
          1: "#FEFFE6",
          2: "#FFFFB8",
          2: "#FFFB8F",
          4: "#FFF566",
          5: "#FFEC3D",
          6: "#FADB14",
          DEFAULT: "#FADB14",
          7: "#D4B106",
          8: "#AD8B00",
          9: "#876800",
          10: "#614700",
        },
        lime: {
          1: "#FCFFE6",
          2: "#F4FFB8",
          3: "#EAFF8F",
          4: "#D3F261",
          5: "#BAE637",
          6: "#A0D911",
          DEFAULT: "#A0D911",
          7: "#7CB305",
          8: "#5B8C00",
          9: "#3F6600",
          10: "#254000",
        },
        green: {
          // Polar Green
          1: "#F6FFED",
          2: "#D9F7BE",
          3: "#B7EB8F",
          4: "#95DE64",
          5: "#73D13D",
          6: "#52C41A",
          DEFAULT: "#52C41A",
          7: "#389E0D",
          8: "#237804",
          9: "#135200",
          10: "#092B00",
        },
        cyan: {
          1: "#E6FFFB",
          2: "#B5F5EC",
          3: "#87E8DE",
          4: "#5CDBD3",
          5: "#36CFC9",
          6: "#13C2C2",
          DEFAULT: "#13C2C2",
          7: "#08979C",
          8: "#006D75",
          9: "#00474F",
          10: "#002329",
        },
        geekBlue: {
          // Geek Blue
          1: "#F0F5FF",
          2: "#D6E4FF",
          3: "#ADC6FF",
          4: "#85A5FF",
          5: "#597EF7",
          6: "#2F54EB",
          DEFAULT: "#2F54EB",
          7: "#1D39C4",
          8: "#10239E",
          9: "#061178",
          10: "030852",
        },
        purple: {
          // Golden Purple
          1: "#F9F0FF",
          2: "#EFDBFF",
          3: "#D3ADF7",
          4: "#B37FEB",
          5: "#9254DE",
          6: "#722ED1",
          DEFAULT: "#722ED1",
          7: "#531DAB",
          8: "#391085",
          9: "#22075E",
          10: "#120338",
        },
        magenta: {
          1: "#FFF0F6",
          2: "#FFD6E7",
          3: "#FFADD2",
          4: "#FF85C0",
          5: "#F759AB",
          6: "#EB2F96",
          DEFAULT: "#EB2F96",
          7: "#C41D7F",
          8: "#9E1068",
          9: "#780650",
          10: "#520339",
        },
      },
    },
  },
  plugins: [],
};
