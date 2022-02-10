import React from "react";
import { render } from "react-dom";
// import MyComponent from "../lib/esm/Carousel.js";
// const  MyComponent = require("../lib/cjs/Carousel.js").default;

import "../dist/index.css"
// const MyComponent = require("../dist/Carousel.js");
import MyComponent from "../dist/index.esm"
console.log(MyComponent);
// import MyComponent from "../lib/cjs/Carousel.js";

const airpods = require("./assets/airpods.png").default;
const iphone = require("./assets/iphone.png").default;
const tablet = require("./assets/tablet.png").default;
const data = [
	{
		title: ["Buy a Tablet or xPhone for college.", "Get airPods."],
		desc: [],
		style: {
			color: "#212121",
			backgroundImage: airpods,
		},
	},
	{
		title: ["xPhone"],
		desc: ["Lots to love. Less to spend.", "Starting at $399"],
		style: {
			color: "#fff",
			backgroundImage: iphone,
		},
	},
	{
		title: ["Tablet"],
		desc: ["Just the right amount of everything"],
		style: {
			color: "#212121",
			backgroundImage: tablet,
		},
	}
];
const App = () => <MyComponent data={data} width={700} height={400} delay={3000} speed={500} />;
render(<App />, document.getElementById("root"));
