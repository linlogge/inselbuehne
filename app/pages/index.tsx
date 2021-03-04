import { Suspense } from "react"
import { Link, BlitzPage, useMutation, Image } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { FC } from "react"
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Container,
  Button,
  AspectRatio,
  useColorModeValue,
  Text,
} from "@chakra-ui/react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href="/signup">
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href="/login">
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Section1: FC = () => {
  const bg = useColorModeValue("green.100", "purple.900")

  return (
    <Box as="section" bg={bg} pb={{ base: "20", md: "40" }} pt={{ base: "40", md: "60" }}>
      <Container maxW="6xl">
        <Grid rowGap={8} columnGap={16} templateColumns="repeat(5, 1fr)" alignItems="center">
          <GridItem colSpan={{ base: 5, md: 3 }}>
            <Heading as="h1" fontSize="5xl" mb="5">
              Lasst uns{" "}
              <Box as="span" color="green.500">
                gemeinsam
              </Box>{" "}
              die Inselbühne beleben.
            </Heading>
            <Text mb="8" fontSize="lg">
              Eine pandemie-taugliche, offene Bühne im Herzen Potsdams: das ist die Idee hinter der
              neuen, alten Inselbühne auf der Freundschaftsinsel. Wie wir das umsetzen wollen, wie
              Du uns dabei unterstützen und wie Du die Bühne nutzen kannst, all das findest Du hier.{" "}
            </Text>
            <Link passHref href="/unterstuetzen">
              <Button colorScheme="green" size="lg" as="a">
                Jetzt spenden
              </Button>
            </Link>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 2 }}>
            <AspectRatio ratio={3 / 2}>
              <Box shadow="xl">
                <Image
                  sizes="400px"
                  src="/Babelsberg+Rock+2.jpg"
                  alt="Band auf der Inselbühne"
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                />
              </Box>
            </AspectRatio>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

const Section2: FC = () => {
  const bg = useColorModeValue("gray.50", "purple.800")

  return (
    <Box as="section" pb={{ base: "20", md: "40" }} pt="20" bg={bg}>
      <Container maxW="6xl" centerContent>
        <Grid columnGap={16} rowGap={8} templateColumns="repeat(2, 1fr)" alignItems="center">
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <AspectRatio ratio={3 / 2}>
              <Box shadow="xl">
                <Image
                  sizes="400px"
                  src="/Kinder3.JPG"
                  alt="Band auf der Inselbühne"
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                />
              </Box>
            </AspectRatio>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Heading as="h1" fontSize="4xl" mb="8">
              Was ist die Inselbühne?
            </Heading>
            <Text>
              Inselbühne haben wir die 1974 errichtete Freilichtbühne auf der Freundschaftsinsel neu
              benannt. Seit 2012 wird sie nicht mehr genutzt und es gibt Pläne, sie abzureißen. Das
              wollen wir verhindern, denn es gibt keine geeignetere Open-Air-Bühne in der Stadt. Wir
              meinen, Potsdam braucht eine Freilichtbühne, vor allem in Zeiten einer Pandemie.{" "}
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

const Section3: FC = () => {
  const bg = useColorModeValue("gray.50", "purple.800")

  return (
    <Box as="section" pb={{ base: "20", md: "40" }} textAlign="center" bg={bg}>
      <Container maxW="3xl">
        <Heading as="h6" variant="uppercase" fontSize="sm" mb="5" color="green.500">
          Los geht's
        </Heading>
        <Heading as="h1" fontSize="4xl">
          Lass uns die Inselbühne gemeinsam wiederbeleben
        </Heading>
        <Text mt="5" mb="10" variant="light">
          Zunächst provisorisch im Sommer 2021, als nicht-kommerzielle Spielstätte für
          Kulturschaffende und Laien aus Potsdam, die eine pandemie-taugliche Auftrittsmöglichkeit
          dringend benötigen. Und wenn die Reaktionen positiv genug sind, machen wir auch nach 2021
          weiter.{" "}
        </Text>
        <Link href="/fortschritt">
          <Button colorScheme="green" size="lg" shadow="base">
            Schau Dir den Fortschritt an
          </Button>
        </Link>
      </Container>
    </Box>
  )
}

const Home: BlitzPage = () => {
  console.log(process.env.NEXT_PUBLIC_DATABASE_URL)
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Suspense fallback={<Text>Loading</Text>}>
        <UserInfo />
      </Suspense>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
