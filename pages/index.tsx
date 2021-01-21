import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Image from "next/image";
import NextLink from "next/link";

export default function AboutOurProject() {
  return (
    <Layout title="Unser Vorhaben" fluid>
      <Box
        as="section"
        background="green.50"
        pb={{ base: "20", md: "40" }}
        pt={{ base: "40", md: "60" }}
      >
        <Container maxW="6xl">
          <Grid gap={8} templateColumns="repeat(5, 1fr)" alignItems="center">
            <GridItem colSpan={{ base: 5, md: 3 }}>
              <Heading as="h1" fontSize="5xl" mb="5">
                Lasst uns{" "}
                <Box as="span" color="green.500">
                  gemeinsam
                </Box>{" "}
                die Inselbühne beleben.
              </Heading>
              <Text mb="8" fontSize="lg">
                Eine pandemie-taugliche, offene Bühne im Herzen Potsdams: das
                ist die Idee hinter der neuen, alten Inselbühne auf der
                Freundschaftsinsel. Wie wir das umsetzen wollen, wie Du uns
                dabei unterstützen und wie Du die Bühne nutzen kannst, all das
                findest Du hier.{" "}
              </Text>
              <NextLink passHref href="/unterstuetzen">
                <Button colorScheme="green" size="lg" as="a">
                  Jetzt spenden
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={{ base: 5, md: 2 }}>
              <AspectRatio ratio={3 / 2}>
                <Image
                  sizes="400px"
                  src="/Babelsberg+Rock+2.jpg"
                  alt="Band auf der Inselbühne"
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box as="section" pb={{ base: "20", md: "40" }} pt="20">
        <Container maxW="6xl" centerContent>
          <Grid
            columnGap={8}
            rowGap={8}
            templateColumns="repeat(3, 1fr)"
            alignItems="center"
          >
            <GridItem colSpan={{ base: 3, md: 1 }}>
              <AspectRatio ratio={3 / 2}>
                <Image
                  sizes="400px"
                  src="/Kinder3.JPG"
                  alt="Band auf der Inselbühne"
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                />
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2 }}>
              <Heading as="h1" fontSize="4xl" mb="8">
                Was ist die Inselbühne?
              </Heading>
              <Grid columnGap={8} rowGap={8} templateColumns="repeat(2, 1fr)">
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <Text>
                    Inselbühne haben wir die 1974 errichtete Freilichtbühne auf
                    der Freundschaftsinsel neu benannt. Seit 2012 wird sie nicht
                    mehr genutzt und es gibt Pläne, sie abzureißen. Das wollen
                    wir verhindern, denn es gibt keine geeignetere
                    Open-Air-Bühne in der Stadt. Wir meinen, Potsdam braucht
                    eine Freilichtbühne, vor allem in Zeiten einer Pandemie.{" "}
                  </Text>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                  <Text>
                    Lass uns die Inselbühne gemeinsam wiederbeleben, zunächst
                    provisorisch im Sommer 2021, als nicht-kommerzielle
                    Spielstätte für Kulturschaffende und Laien aus Potsdam, die
                    eine pandemie-taugliche Auftrittsmöglichkeit dringend
                    benötigen. Und wenn die Reaktionen positiv genug sind,
                    machen wir auch nach 2021 weiter.{" "}
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
