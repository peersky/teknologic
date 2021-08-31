import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  Button,
  VStack,
  Image,
  Icon,
  SimpleGrid,
  GridItem,
  Stack,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
// import { Logo } from "@choc-ui/logo";
import { openPopupWidget } from "react-calendly";
import TrustedBadge from "./TrustedBadge";

const LandingPage = (props) => {
  const bg = "gray.800";

  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="yellow.300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color="gray.400"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.400">
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <VStack spacing={48} bg="gray.800">
      <VStack spacing={0}>
        {" "}
        <chakra.header
          bg={bg}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
          position="sticky"
          top={0}
          left={0}
          right={0}
          zIndex={3}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                {/* <Logo /> */}
                <Image src="/images/logo-only-text.png" maxH="3rem"></Image>
                <VisuallyHidden>TeknoLogic</VisuallyHidden>
              </chakra.a>
            </Flex>
            {/*  <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                 <Button variant="ghost">Features</Button>
                  <Button variant="ghost">Pricing</Button>
                  <Button variant="ghost">Blog</Button>
                  <Button variant="ghost">Company</Button>
                  <Button variant="ghost">Sign in</Button>
               </HStack>
              <Button colorScheme="brand" size="sm">
                  Get Started
                </Button>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button w="full" variant="ghost">
                    Features
                  </Button>
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                  <Button w="full" variant="ghost">
                    Company
                  </Button>
                  <Button w="full" variant="ghost">
                    Sign in
                  </Button>
                </VStack>
              </Box>
            </HStack> */}
          </Flex>
        </chakra.header>
        <Flex w="full" bgColor={bg} direction="column">
          <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
            <Box maxW="7xl" mx="auto">
              <Box
                pos="relative"
                pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
                maxW={{ lg: "2xl" }}
                w={{ lg: "full" }}
                zIndex={1}
                bg={bg}
                border="solid 1px transparent"
              >
                <Icon
                  display={{ base: "none", lg: "block" }}
                  position="absolute"
                  right={0}
                  top={0}
                  bottom={0}
                  h="full"
                  w={48}
                  color={bg}
                  transform="translateX(50%)"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </Icon>
                <Box
                  mx="auto"
                  maxW={{ base: "7xl" }}
                  px={{ base: 4, sm: 6, lg: 8 }}
                  mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
                >
                  <Box
                    w="full"
                    textAlign={{ sm: "center", lg: "left" }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <chakra.h1
                      fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                      letterSpacing="tight"
                      lineHeight="short"
                      fontWeight="extrabold"
                      color="gray.300"
                    >
                      <chakra.span display={{ base: "block", xl: "inline" }}>
                        We build <br />
                      </chakra.span>
                      <chakra.span
                        display={{ base: "block", xl: "inline" }}
                        color="yellow.500"
                      >
                        Your imagination
                      </chakra.span>
                    </chakra.h1>
                    <chakra.p
                      mt={{ base: 3, sm: 5, md: 5 }}
                      fontSize={{ sm: "lg", md: "xl" }}
                      maxW={{ sm: "xl" }}
                      mx={{ sm: "auto", lg: 0 }}
                      color="gray.500"
                    >
                      Teknologic provides highly professional assistance in
                      design, prototype and bring to life complex hardware,
                      software and electronics.
                      <br />
                      In any step of your project - call us to be your
                      development ninjas!
                    </chakra.p>
                    <Box
                      mt={{ base: 5, sm: 8 }}
                      display={{ sm: "flex" }}
                      justifyContent={{ sm: "center", lg: "start" }}
                      fontWeight="extrabold"
                      fontFamily="fantasy"
                    >
                      <Box rounded="full" shadow="md">
                        <chakra.a
                          w="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          border="solid 1px transparent"
                          fontSize={{ base: "md", md: "lg" }}
                          rounded="md"
                          color="black"
                          bg="yellow.500"
                          _hover={{ bg: "brand.700" }}
                          px={{ base: 8, md: 10 }}
                          py={{ base: 3, md: 4 }}
                          cursor="pointer"
                          onClick={() =>
                            openPopupWidget({
                              url: "https://calendly.com/tim-916",
                            })
                          }
                        >
                          Arrange a call
                        </chakra.a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              position={{ lg: "absolute" }}
              top={{ lg: 0 }}
              bottom={{ lg: 0 }}
              right={{ lg: 0 }}
              w={{ lg: "50%" }}
              border="solid 1px transparent"
            >
              <Image
                h={[56, 72, 96, "full"]}
                w="full"
                fit="cover"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt=""
                loading="lazy"
              />
            </Box>
          </Box>
        </Flex>
        <Flex
          bg="gray.800"
          p={20}
          w="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Box shadow="xl" bg="gray.800" px={8} py={20} mx="auto">
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, lg: 3 }}
              spacingY={{ base: 10, lg: 32 }}
              spacingX={{ base: 10, lg: 24 }}
            >
              <Box alignSelf="start">
                <chakra.h2
                  color="blue.500"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Everything you need
                </chakra.h2>
                <chakra.h2
                  mb={3}
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="extrabold"
                  textAlign={{ base: "center", sm: "left" }}
                  color="gray.400"
                  lineHeight="shorter"
                  letterSpacing="tight"
                >
                  All-in-one platform
                </chakra.h2>
                <chakra.p
                  mb={6}
                  fontSize={{ base: "lg", md: "xl" }}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.500")}
                >
                  We are your one stop solution to get things done. Teknologic
                  offers full project ownership or partial involvement. Our key
                  advantage is that we use distributed teams of highly
                  professional engineers to keep you on the track
                </chakra.p>
              </Box>
              <GridItem colSpan={2}>
                <Stack
                  spacing={{ base: 10, md: 0 }}
                  display={{ md: "grid" }}
                  gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                  gridColumnGap={{ md: 8 }}
                  gridRowGap={{ md: 10 }}
                >
                  <Feature title="Project audit and evaluation">
                    Tell us what you think will change the world. We will
                    carefully research and give you our audit results, pointing
                    to strengths and weaknesses.
                  </Feature>
                  <Feature title="Define a task">
                    Tell us what are your needs and we will fit best possible
                    strategy to get to market for you.
                  </Feature>
                  <Feature title="Navigate trough system architecture">
                    {" "}
                    We can help you to define architecture for your system.
                  </Feature>
                  <Feature title="Get to know your bill of materials">
                    {" "}
                    We will help you to review your bill of materials, lead
                    times and logistics involved{" "}
                  </Feature>
                  <Feature title="Design clean, for manufacturing">
                    {" "}
                    We can manage design stages up till manufacturing, negotiate
                    the factory and lead times
                  </Feature>
                  <Feature title="Interate with business">
                    {" "}
                    We will help you to integrate in the market with our top
                    notch knowledge in the industry{" "}
                  </Feature>
                </Stack>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Flex>
        <Flex
          bg="gray.800"
          p={20}
          w="auto"
          justifyContent="center"
          alignItems="center"
          mb={18}
        >
          <Box shadow="xl" bg="gray.800" px={8} py={20} mx="auto">
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, lg: 2 }}
              spacingY={{ base: 10, lg: 32 }}
              spacingX={{ base: 10, lg: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={3}
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="extrabold"
                  textAlign={{ base: "center", sm: "left" }}
                  color="gray.400"
                  lineHeight="shorter"
                  letterSpacing="tight"
                >
                  Become familiar
                </chakra.h2>
                <chakra.p
                  mb={6}
                  fontSize={{ base: "lg", md: "xl" }}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.500")}
                >
                  Let's put our heads together to build a successful partnership
                  to benefit both your customers and your business.
                </chakra.p>
                <Button
                  as="a"
                  variant="solid"
                  w={{ base: "full", sm: "auto" }}
                  colorScheme="yellow"
                  size="lg"
                  onClick={() =>
                    openPopupWidget({
                      url: "https://calendly.com/tim-916",
                    })
                  }
                >
                  Arrange a call
                </Button>
              </Box>
              <VStack
                direction="column"
                flexGrow={1}
                spacing={5}
                alignItems="start"
              >
                <Feature>System design</Feature>
                <Feature>Schematic capture</Feature>
                <Feature>PCB design</Feature>
                <Feature>Mechanical design</Feature>
                <Feature>Quick prototyping</Feature>
                <Feature>Design for manufactiring</Feature>
                <Feature>Design for complience</Feature>
                <Feature>Embedded programming and DSP</Feature>
                <Feature>IoT and Mesh competance</Feature>
                <Feature>RF compitance</Feature>
              </VStack>
            </SimpleGrid>
          </Box>
        </Flex>
        <Box w="100%" bg="gray.800">
          <Heading color="blue.400" textAlign="center" pb={14} pt={0}>
            Amongst our clients
            <span role="img" aria-label="heart"></span>
          </Heading>
          <Flex wrap="wrap" direction="row" justifyContent="center">
            <Suspense fallback={""}>
              <TrustedBadge name="Aretai" ImgURL="/icons/aretai_logo.png" />
              <TrustedBadge name="Barix" ImgURL="/icons/barix_logo.png" />
              <TrustedBadge
                name="Coastal Amusements"
                ImgURL="/icons/coastalLogo.png"
              />
              <TrustedBadge name="Erica Synths" ImgURL="/icons/ericaLogo.png" />
              <TrustedBadge name="Leclanche" ImgURL="/icons/Leclanche.png" />
              <TrustedBadge name="UAV Factory" ImgURL="/icons/uav.png" />
            </Suspense>
          </Flex>
        </Box>
      </VStack>
      <Box mt={14} bg="gray.900" color="gray.400" w="100%">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Image src="/images/logo-w-text.png" />
              </Box>
              <Text fontSize={"sm"}>
                © 2021 SIA Teknologic. All rights reserved
              </Text>
            </Stack>
            {/* <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link href={"#"}>Overview</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>*/}
          </SimpleGrid>
        </Container>
      </Box>
    </VStack>
  );
};

export default LandingPage;
