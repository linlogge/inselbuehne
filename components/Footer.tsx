import {
  Container,
  Flex,
  Link as ChakraLink,
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";

function MenuItem(props) {
  const { children, to = "/" } = props;
  return (
    <NextLink passHref href={to}>
      <ChakraLink mt="5">{children}</ChakraLink>
    </NextLink>
  );
}

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <>
      <Box as="footer" background="dark" color="gray.400" pt="16" pb="10">
        <Container maxW="6xl" py="5">
          <Grid
            columnGap={8}
            rowGap={12}
            templateColumns="repeat(6, 1fr)"
            textAlign={{ base: "center", md: "left" }}
          >
            <GridItem colSpan={{ base: 6, md: 3 }}>
              <NextLink passHref href="/">
                <Heading fontSize="4xl" color="white" mb="2">
                  Inselbühne Potsdam
                </Heading>
              </NextLink>
              <Text>
                Ein Projekt der{" "}
                <ChakraLink
                  href="https://www.potsdamer-buergerstiftung.com"
                  isExternal
                  color="green.500"
                >
                  Potsdamer Bürgerstiftung
                </ChakraLink>
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 1 }}>
              <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
                Social Media
              </Heading>
              <Flex direction="column" as="nav">
                <MenuItem to="https://instagram.com/inselbuehne">
                  Instagram
                </MenuItem>
                <MenuItem to="https://github.com/potsdamer-buergerstiftung/inselbuehne">
                  GitHub
                </MenuItem>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 1 }}>
              <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
                Über uns
              </Heading>
              <Flex direction="column" as="nav">
                <MenuItem to="/ueber-uns">Team</MenuItem>
                <MenuItem to="https://www.potsdamer-buergerstiftung.com">
                  Bürgerstiftung
                </MenuItem>
                <MenuItem to="/presse">Presse</MenuItem>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 1 }}>
              <Heading as="h6" fontSize="sm" variant="uppercase" color="white">
                Mehr
              </Heading>
              <Flex direction="column" as="nav">
                <MenuItem to="/datenschutz">Datenschutz</MenuItem>
                <MenuItem to="/impressum">Impressum</MenuItem>
                <MenuItem to="/kontakt">Kontakt</MenuItem>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box bg="dark" py={16} color="gray.400">
        <Container maxW="6xl">
          <Text>&copy; {year} Potsdamer Bürgerstiftung</Text>
        </Container>
      </Box>
    </>
  );
}
