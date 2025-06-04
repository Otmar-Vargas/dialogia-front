import React from "react";
import { Box, Flex, Heading, Text, Image, Link, Button } from "@chakra-ui/react";

const HowToUseDialogia = () => {
  return (
    <Box bg="white">
      <Flex direction={{ base: "column", md: "row" }} minH="100vh" gap={8}>
        {/* Contenido (izquierda) */}
        <Box flex={{ md: "3" }} width={{ base: "100%", md: "60%" }} px={{ base: 6, md: 16 }}>

          <Heading size="3xl" mb={6} color="#444444" fontWeight="bold" textAlign="center" mt={12}>
            Domina Dialogia en 3 pasos
          </Heading>

          {/* ----- 1. Login ----- */}
          <Box mb={16}>
            <Heading size="xl" mb={4} color="#444444">
              Iniciar sesión y crear cuenta
            </Heading>
            <Text fontSize="md" mb={6} color="#676767" lineHeight="tall">
              Solo toma 30 segundos. Te guiamos paso a paso para registrarte y acceder a todas las funcionalidades.
            </Text>

            <Box 
              mb={10} 
              borderRadius="xl" 
              overflow="hidden" 
              boxShadow="lg"
              position="relative"
              paddingTop="56.25%"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wBd57UveuSw" //
                title="Registro en Dialogia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Box>
          </Box>

          {/* ----- 2. Debates ----- */}
          <Box mb={16}>
            <Heading size="xl" mb={4} color="#444444">
              Crear debates y participar
            </Heading>
            <Text fontSize="md" mb={6} color="#676767" lineHeight="tall">
              Aprende a iniciar un debate desde cero, comentar en discusiones existentes y conectar con otros usuarios. ¡Tu voz importa!
            </Text>

            <Box 
              mb={10} 
              borderRadius="xl" 
              overflow="hidden" 
              boxShadow="lg"
              position="relative"
              paddingTop="56.25%"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-dV6nhyM_gI" // Reemplaza con el ID real
                title="Cómo debatir en Dialogia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Box>
          </Box>

          {/* ----- 3. Censura ----- */}
          <Box mb={16}>
            <Heading size="xl" mb={4} color="#444444">
              Filtros de censura
            </Heading>
            <Text fontSize="md" mb={6} color="#676767" lineHeight="tall">
              Dialogia te permite elegir qué contenido ver. Activa los filtros para evitar lenguaje ofensivo o desactívalos para debates sin límites. Tú decides.
            </Text>

            <Box 
              mb={10} 
              borderRadius="xl" 
              overflow="hidden" 
              boxShadow="lg"
              position="relative"
              paddingTop="56.25%"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vcP4nDS5HPk" 
                title="Filtros de censura en Dialogia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Box>
          </Box>

          <Box
            textAlign="center"
            mb={{ base: 8, md: 0 }}
          >
            <Heading size="lg" mb={4} color="#444444">
              ¿Tienes más dudas?
            </Heading>
            <Text fontSize="md" mb={6} color="#676767">
              Escríbenos a:  
              <Link 
                href="mailto:dialogiap.gmail.com"
                fontWeight="bold"
                ml={2}
              >
                dialogiap.gmail.com
              </Link>
            </Text>
            <Button 
              as="a"
              href="mailto:dialogiap.gmail.com"
              colorScheme="blue" 
              size="lg"
              mb={8}
            >
              Contactar Soporte
            </Button>
          </Box>

        </Box>

        {/* Imagen decorativa (derecha) */}
        <Box flex={{ md: "2" }} width={{ base: "100%", md: "40%" }}>
          <Image
            src="howtouse.jpg"
            alt="Usando Dialogia"
            objectFit="cover"
            width="100%"
            height="100%"
            minH={{ base: "300px", md: "auto" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HowToUseDialogia;