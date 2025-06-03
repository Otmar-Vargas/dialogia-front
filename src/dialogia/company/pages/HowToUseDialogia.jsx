import React, { useState } from "react";
import { Box, Flex, Heading, Text, Image, Button, Link } from "@chakra-ui/react";

const HowToUseDialogia = () => {
  const [videoWatched, setVideoWatched] = useState(false);

  return (
    <Box bg="white">
      {/* Sección principal */}
      <Flex
        direction={{ base: "column", md: "row" }} 
        minH="100vh"
        gap={8}
      >
        {/* Contenido (izquierda) */}
        <Box flex={{ md: "3" }} width={{ base: "100%", md: "60%" }} px={{ base: 6, md: 16 }}>
          <Box textAlign="center" mb={12}/>

          <Heading size="3xl" mb={6} color="#444444" fontWeight="bold" textAlign="center">
            Aprende a usar Dialogia
          </Heading>

          <Text fontSize="md" mb={8} color="#676767" lineHeight="tall" textAlign="center">
            Descubre cómo navegar, debatir y aprovechar al máximo la plataforma en menos de 5 minutos.
          </Text>

          {/* Video embebido (YouTube) */}
          <Box 
            mb={10} 
            borderRadius="xl" 
            overflow="hidden" 
            boxShadow="lg"
            position="relative"
            paddingTop="56.25%" // 16:9 aspect ratio
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3r5rQsoZ0iI?si=4NKmHVjTSrrzctnB" 
              title="Tutorial Dialogia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0 }}
              onEnded={() => setVideoWatched(true)} // Activa feedback al terminar
            />
          </Box>

          {/* Feedback (solo visible después del video) */}
          {videoWatched && (
            <Box textAlign="center" mb={16}>
              <Heading size="lg" mb={4} color="#444444">
                ¿Te resultó útil este tutorial?
              </Heading>
              <Flex justify="center" gap={4}>
                <Button 
                  colorScheme="green" 
                  size="lg" 
                  onClick={() => alert("¡Gracias por tu feedback!")}
                >
                  Sí 👍
                </Button>
                <Button 
                  colorScheme="red" 
                  size="lg" 
                  variant="outline"
                  onClick={() => alert("Lo sentimos. ¿Qué podemos mejorar?")}
                >
                  No 👎
                </Button>
              </Flex>
            </Box>
          )}

                  {/* Sección de Dudas */}
          <Box 
            p={8}
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
            >
              Contactar Soporte
            </Button>
          </Box>

        </Box>

        {/* Imagen decorativa (derecha) */}
        <Box flex={{ md: "2" }} width={{ base: "100%", md: "40%" }}>
          <Image
            src="howtouse.jpg" // Cambiar por una imagen relacionada (ej.: personas usando laptops)
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