import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		border: 0;
		margin: 0;
		padding: 0;
		outline: 0;
		resize: none;
		box-sizing: border-box;
		scroll-behavior: smooth;
		font-family: 'Inter', sans-serif;
	}

	:root {
    --color-white: #FFFFFF;
    --color-black: #00000040;

    --gray-100: #F0F2F5;
    --gray-200: #D9D9D9;
    --gray-300: #50656E;
    --gray-400: #455A64;
		--gray-500: #9A9A9A;
    --gray-600: #333333;
    --gray-700: #95959540;
		--gray-800: #4F4F4D;

    --transparent: transparent;
	}

	body {
		color: var(--gray-600);
		background-color: var(--gray-100);
	}

	button, a {
		cursor: pointer; 
	}

	a {
		text-decoration: none;
	}

	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--transparent);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 0.5px;
		background-color: var(--gray-700);
	}
`;
