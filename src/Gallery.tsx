/**
 * Gallery
 * Project: hum_beautification
 * Author: jovialis (Dylan Hanson)
 * Date: 12/13/23
 */
import {Box, Center, Heading, Icon, keyframes, Link, Mark, MarkProps, Spacer, Text, VStack} from "@chakra-ui/react";
import {Fragment, PropsWithChildren} from "react";
import {MdArrowDownward, MdArrowOutward} from "react-icons/md";
import {PhotoLocation} from "./App";
import {useScrollPosition} from "./useScrollPosition";
import useWindowDimensions from "./useWindowDimensions";

const black = "#000";
const white = "#e6e6e6"

function buildLocationCards(sequence: PhotoLocation) {
	let allCards = []

	// Name of the building
	allCards.push(<CardFrame>
		<Heading color={white} size={"xl"} fontWeight={300}>
			{sequence.name}
		</Heading>
	</CardFrame>)

	// Push all of the photos
	allCards.push(
		...sequence.images.map((image, i) => buildImageCard(sequence, image)),
		buildImageCard(sequence, sequence.images[sequence.images.length - 1])
	)

	// Push a blank page
	allCards.push(
		<Box
			w={"100%"}
			h={"100vh"}
			bg={"black"}
		/>
	)

	return allCards;
}

function buildImageCard(sequence: PhotoLocation, image: PhotoLocation["images"][0]) {
	return <Box
		w={"100%"}
		h={"100vh"}
		bg={black}
		bgImage={image.src}
		bgSize={"contain"}
		bgPosition={"center"}
		bgRepeat={"no-repeat"}
	>
		<VStack w={"100%"} h={"100%"}>
			<Spacer/>
			<Text textShadow={"0px 0px 5px #000"} fontSize={"xl"} color={white}>
				{sequence.name}
			</Text>
			<Heading size={"xl"} textShadow={"0px 0px 5px #000"} color={white} fontWeight={400}>
				{image.year}
			</Heading>
			<Box h={"10vh"}/>
		</VStack>
		{/*<Image*/}
		{/*	src={image}*/}
		{/*	w={"auto"}*/}
		{/*	h={"100vh"}*/}
		{/*	position={"sticky"}*/}
		{/*	objectFit={"cover"}*/}
		{/*	top={0}*/}
		{/*/>*/}
	</Box>
}

export function Gallery() {
	const allCards = []

	const bounceAnimation = keyframes`
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
	`;

	allCards.push(<Box
		w={"100%"}
		h={"100vh"}
		bg={black}
		position={"relative"}
	>
		<Center
			h={"100%"}
			w={"100%"}
		>
			<VStack>
				<Heading size={"xl"} fontWeight={300}>
					<AnimatedMark>
						beautification
					</AnimatedMark>
				</Heading>
			</VStack>
		</Center>
		<Center
			w={"100%"}
			mb={"10vh"}
			position={"absolute"}
			left={0}
			bottom={0}
		>
			<VStack>
				<Text color={white} fontSize={"sm"}>
					scroll down
				</Text>
				<Icon
					as={MdArrowDownward}
					color={white}
					boxSize={6}
					sx={{
						animation: `${bounceAnimation} 2s infinite`
					}}
				/>
			</VStack>
		</Center>
	</Box>)

	allCards.push(<CardFrame>
		<VStack>
			<Text color={white} fontSize={"xl"} fontWeight={300}>
				an exercise in <AnimatedMark>imagination</AnimatedMark> by
			</Text>
			<Heading color={white} size={"xl"} fontWeight={300}>
				dylan hanson
			</Heading>
		</VStack>
	</CardFrame>)

	allCards.push(<BlankCard/>)

	allCards.push(<TextCard>
		in 1953, the mayor and city council of nashville created the <AnimatedMark>city beautiful
		commission</AnimatedMark>.
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(<TextCard>
		its job was to improve the sanitation, cleanliness, and appearance of nashville.
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(<TextCard>
		the commission repainted houses, rebuilt their facades, and celebrated the city.
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(<TextCard>
		they published their work in the <AnimatedMark>city beautiful scrapbooks</AnimatedMark>.
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(<TextCard>
		i tracked down a few of those buildings to see where they are now.
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(<BlankCard/>)

	allCards.push(<TextCard>
		some were still there<Mark color={black}>...</Mark>
	</TextCard>)

	allCards.push(<TextCard>
		some were still there...
	</TextCard>)

	allCards.push(...buildLocationCards({
		"name": "1101 19th Avenue",
		"images": [
			{"src": "/photos/1101 19th Ave 1.webp", "year": "1958"},
			{"src": "/photos/1101 19th Ave 2.webp", "year": "2023"}
		]
	}))

	allCards.push(<TextCard>
		and some had changed<Mark color={black}>...</Mark>
	</TextCard>)

	allCards.push(<TextCard>
		and some had changed...
	</TextCard>)

	allCards.push(...buildLocationCards({
		"name": "1207 Jo Johnston Avenue",
		"images": [
			{"src": "/photos/1207 Jo Johnston Ave 1.webp", "year": "1959"},
			{"src": "/photos/1207 Jo Johnston Ave 2.webp", "year": "2023"}
		]
	}))

	allCards.push(...buildLocationCards({
		"name": "1407 Division Street",
		"images": [
			{"src": "/photos/1407 Division 1.webp", "year": "1960"},
			{"src": "/photos/1407 Division 2.webp", "year": "1960"},
			{"src": "/photos/1407 Division 3.webp", "year": "1960"},
			{"src": "/photos/1407 Division 4.webp", "year": "2023"}
		]
	}))

	allCards.push(<TextCard>
		but many were gone <AnimatedMark>forever</AnimatedMark>.
	</TextCard>)

	allCards.push(<TextCard>
		but many were gone forever.
	</TextCard>)

	allCards.push(...buildLocationCards({
		"name": "1704 Jefferson Street",
		"images": [
			{"src": "/photos/1704 Jefferson 1.webp", "year": "1959"},
			{"src": "/photos/1704 Jefferson 2.webp", "year": "2023"}
		]
	}))

	allCards.push(<TextCard>
		a few were even razed by the commission's own hand.
	</TextCard>)

	allCards.push(<TextCard>
		a few were even razed by the commission's own hand.
	</TextCard>)

	allCards.push(...buildLocationCards({
		"name": "9th Ave and Gay Street",
		"images": [
			{"src": "/photos/9th and Gay 1.webp", "year": "1954"},
			{"src": "/photos/9th and Gay 2.webp", "year": "1954"},
			{"src": "/photos/9th and Gay 3.webp", "year": "2023"}
		]
	}))

	allCards.push(<TextCard>
		a building represents the past.
	</TextCard>)

	allCards.push(<TextCard>
		a building represents the past.
	</TextCard>)

	allCards.push(<TextCard>
		it is a memory of the city before.
	</TextCard>)

	allCards.push(<TextCard>
		it is a memory of the city before.
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(...buildLocationCards({
		"name": "1012 Summit Avenue",
		"images": [
			{"src": "/photos/1012 Summit Ave 1.webp", "year": "1959"},
			{"src": "/photos/1012 Summit Ave 2.webp", "year": "2023"}
		]
	}));

	allCards.push(<TextCard>
		beautification is an exercise in imagination:
	</TextCard>)

	allCards.push(<TextCard>
		a manifestation of the city’s aspirations and efforts to become.
	</TextCard>)

	allCards.push(<TextCard>
		a manifestation of the city’s aspirations and efforts to <AnimatedMark>become</AnimatedMark>.
	</TextCard>)

	allCards.push(...buildLocationCards({
		"name": "815 Demonbreun Street",
		"images": [
			{"src": "/photos/815 Demonbreun St 1.webp", "year": "1958"},
			{"src": "/photos/815 Demonbreun St 2.webp", "year": "2023"}
		]
	}));

	allCards.push(<TextCard>
		what is the point of beautification if destruction is someday guaranteed?
	</TextCard>)

	allCards.push(<TextCard>
		what is the point of beautification if destruction is someday guaranteed?
	</TextCard>)

	allCards.push(<TextCard>
		perhaps, so that in the future, we can reimagine again.
	</TextCard>)

	allCards.push(<TextCard>
		perhaps, so that in the future, we can reimagine again.
	</TextCard>)

	allCards.push(...buildLocationCards({
		"name": "1020 South Street",
		"images": [
			{"src": "/photos/1020 South St 1.webp", "year": "1959"},
			{"src": "/photos/1020 South St 2.webp", "year": "2023"}
		]
	}));

	allCards.push(...buildLocationCards({
		"name": "1008 12th Avenue South",
		"images": [
			{"src": "/photos/1008 12th Ave South 1.webp", "year": "1959"},
			{"src": "/photos/1008 12th Avenue South 2.webp", "year": "1959"},
			{"src": "/photos/1008 12th Avenue South 3.webp", "year": "2023"}
		]
	}));

	allCards.push(<TextCard>
		a city in stasis is already gone.
	</TextCard>)

	allCards.push(<TextCard>
		<Mark color={black}>a city</Mark> in stasis is already gone.
	</TextCard>)

	allCards.push(<TextCard>
		<Mark color={black}>a city in stasis is</Mark> already gone.
	</TextCard>)

	allCards.push(<TextCard>
		<Mark color={black}>a city in stasis is already</Mark><Mark color={"white"}> gone.</Mark>
	</TextCard>)

	allCards.push(<BlankCard/>)

	allCards.push(...buildLocationCards({
		"name": "2601 Almeda Street",
		"images": [
			{"src": "/photos/2601 Almeda 1.webp", "year": "1958"},
			{"src": "/photos/2601 Almeda 2.webp", "year": "1958"},
			{"src": "/photos/2601 Almeda 3.webp", "year": "2023"}
		]
	}));

	allCards.push(<BlankCard/>);

	allCards.push(<TextCard>
		{"thanks, nashville. it's been fun."}
		<br/>
		<Mark color={black}>{"at times."}</Mark>
	</TextCard>)

	allCards.push(<TextCard>
		{"thanks, nashville. it's been fun."}
		<br/>
		{"at times."}
	</TextCard>)

	allCards.push(<BlankCard/>);

	allCards.push(<TextCard>
		<VStack>
			<Text fontSize={"xl"}><AnimatedMark>beautification</AnimatedMark></Text>
			<Text fontSize={"md"}>by dylan hanson for hons 1860w</Text>
			<Box/>
			<Box/>
			<Text fontSize={"sm"}>archival scans courtesy of the nashville public library</Text>
			<Box/>
			<Box/>
			<Box/>
			<Box/>
			<Link
				color={"blue.500"}
				fontSize={"sm"}
				href={"https://www.dropbox.com/scl/fo/iaajbhs5pjj1st089d6te/h?rlkey=opdrpdm0bl4fzjm2xczfru42e&dl=0"}
				target={"_blank"}
			>
				View the Images <Icon as={MdArrowOutward}/>
			</Link>
		</VStack>
	</TextCard>)

	allCards.push(<TextCard>
		<VStack>
			<Text fontSize={"xl"}><AnimatedMark>beautification</AnimatedMark></Text>
			<Text fontSize={"md"}>by dylan hanson for hons 1860w</Text>
			<Box/>
			<Box/>
			<Text fontSize={"sm"}>archival scans courtesy of the nashville public library</Text>
			<Box/>
			<Box/>
			<Box/>
			<Box/>
			<Link
				color={"blue.500"}
				fontSize={"sm"}
				href={"https://www.dropbox.com/scl/fo/iaajbhs5pjj1st089d6te/h?rlkey=opdrpdm0bl4fzjm2xczfru42e&dl=0"}
				target={"_blank"}
			>
				View the Images <Icon as={MdArrowOutward}/>
			</Link>
		</VStack>
		<VStack position={"absolute"} left={0} bottom={"10vh"} w={"100%"} alignItems={"center"}>
			<Text fontSize={"sm"}>
				yes, this is the end.
				<br/>
				you can stop scrolling.
			</Text>
		</VStack>
	</TextCard>);

	const scrollPosition = useScrollPosition();
	const windowDim = useWindowDimensions();

	const fullscreenDuration = windowDim.height * 0.35  // How many pixels a card should be in full screen
	const transitionDuration = windowDim.height * 0.5;  // How many pixels a card should be transitioning into the next

	const totalCardRenderHeight = fullscreenDuration + transitionDuration;
	const pageHeight = totalCardRenderHeight * allCards.length + transitionDuration;

	const curCardNum = Math.floor(scrollPosition / totalCardRenderHeight);
	const curCard = allCards[curCardNum];

	const hasNextCard = curCardNum < allCards.length;
	const nextCard = hasNextCard ? allCards[curCardNum + 1] : null;

	const curCardOffset = scrollPosition - curCardNum * totalCardRenderHeight;

	const curCardFading = curCardOffset > fullscreenDuration;
	const curCardFadeProgress = curCardFading ? (curCardOffset - fullscreenDuration) / transitionDuration : 0

	return <>
		<Box h={pageHeight} w={"100%"} position={"relative"}>
			{/*<Text color={"black"} position={"fixed"} top={10} left={10} zIndex={1000}>*/}
			{/*	ScrollY: {scrollPosition} / WindowH: {windowDim.height} / CardNum: {curCardNum} / CardOff: {curCardOffset} / CardFading: {String(curCardFading)} / FadeProgress: {curCardFadeProgress}*/}
			{/*</Text>*/}

			<Box
				zIndex={100}
				position={"fixed"}
				w={"100%"}
				h={"100%"}
				opacity={1 - curCardFadeProgress}
			>
				{curCard}
			</Box>
			{nextCard && <Box
                zIndex={0}
                position={"fixed"}
                w={"100%"}
                h={"100%"}
            >
				{nextCard}
            </Box>}
		</Box>
	</>
}


function CardFrame(props: PropsWithChildren) {
	return <Center
		w={"100%"}
		h={"100vh"}
		bg={black}
	>
		{props.children}
	</Center>
}

function BlankCard() {
	return <Box w={"100%"} h={"100vh"} bg={black}/>
}

function TextCard(props: PropsWithChildren) {
	return <CardFrame>
		<VStack maxW={"30vw"}>
			<Text color={white} fontSize={"xl"} fontWeight={300} textAlign={"center"}>
				{props.children}
			</Text>
		</VStack>
	</CardFrame>
}

function AnimatedMark(props: MarkProps) {
	const colorAnimation = keyframes`
        0%, 100% {
            color: #40E0D0;
        }
        33% {
            color: #FF8C00;
        }
        66% {
            color: #FF0080;
        }
	`;

	return <Mark {...props} sx={{
		"animation": `${colorAnimation} 5s infinite`
	}}/>
}