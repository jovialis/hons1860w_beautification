import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import React from 'react';
import {Gallery} from "./Gallery";

export interface PhotoLocation {
	name: string
	images: {
		src: string,
		year: string
	}[]
}

export default function App() {

	return <>
		<ChakraProvider theme={extendTheme({
			fonts: {
				heading: "'Besley Variable', sans-serif",
				body: "'Besley Variable', sans-serif"
			}
		})}>
			<Gallery/>
		</ChakraProvider>
	</>
}