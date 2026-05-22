import { useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

const CAPSULES = [
  {
    id: 1,
    sender: "Reiko",
    message: `hihi kris! it’s been a great many years being in the same campus as you — from being members tgt, then salt, and leading. God has been rly faithful and u are undoubtedly not just a partner in ministry, but a friend, and brother in christ! thank u for walking with me through my ups and downs but also grateful that we got to partner tgt in shepherding our campus that we so dearly love. i know u say u don’t feel the change, but I DEF feel the change LOL. i realize ur presence is def a source of comfort and stability both for myself, many of the leaders, and also our members as well. i think that also goes to show how much you have shouldered many things for us and how much we turn to you and depend on youu! know that its been a difficult season, but in the end it’s rly cool to see you choose God over and over again. maybe there are different thoughts and feelings u have during this season of transition, but i firmly believe that God will bring to completion the work that he started. i know that what God has in store for you in this coming season is a continuation of all the things he’s been refining you in and that he’s going to take u to even higher heights so that you can truly live in the JOY and PEACE that comes from that overflow in your relationship with him. let’s keep running this race tgt bro!`,
    mediaType: "image",
    mediaSrc: "/images/rei.jpeg",
  },
  {
    id: 2,
    sender: "GaYoung",
    message: `Hi Kris :))
woa praise God for His faithfulness over your life in the past 10 years in UST! God is good and so very loving to you mann hahah
super grateful for you and how i’ve gotten to live life with you and we’ve gotten to witness God working in our campus and in both of our lives especially in the past two years !
From having 0 context with you in my first and second year to UNO and Missions to ESCENDO and LOHAS buddies ahaha I am really really grateful for how we have been able to share the smallest moments of snacking Monaka at Circle K to deepest convos about decision making HAHA to greatest journeys of going across the world to share of God’s name !!
Kris, genuinely thank you so much for all the joy, the wisdom, the memes, the connection and the love that you brought into my own and also our team and ALL of our members lives. Yes, it was Jesus working through you, but I am grateful to have experienced all the more of God through you who chose to say yes to however the Spirit is leading. For all the encouragements, the truths in love that you spoke across the span of 2 years whether it be about decision making, about friends, about mission, about leading, about jobs lol whatever the topic man I am blessed to have a friend and an older brother in Christ like you AHHA Thank you for choosing to be a friend even when its hard!

All that to say, that's just a glimpse of the work that God has done through you for me and all that is just ONE person that you have led to be more like Jesus in this campus of ust. Aka, God worked powerfully in UST and He used you through those seasons because He loves all of His people in UST and not only that He loves YOU so much!! I don't exactly know if there are different thoughts or doubts even as to how you led or influenced but i pray that in whatever thoughts and emotions that you feel you are able to bring it authentically before God and people around you that love you! I pray also that you will receive grace and hold onto God's sovereignty and love over all !

When we were having a convo in front of capitol the other day, i remembered our convo of when you were giving me the TC invite bc you mentioned wanting to remember and share the joy of serving and leading. And now as you have shared more on that too a year later, I am really praying for a renewal of mind and heart in this season that you may be FILLED FIRST with joy and FILLED FIRST with God's love and FILLED with the Spirit BEFORE you serve, and AS you serve. Not just in ministry or polyu but in all the different contexts, in life as you serve Jesus, I pray you will continue to choose to walk this life with the fruit of the Spirit by committing to hear from the lord🙏🏼

I really am so excited for you as much as (or more than) i am sad to not see you in ust. And i pray for genuine joy as we witness God doing beyond our imaginations in both polyu/ust and our personal lives tooo !!! And while it may not be instant or may come with its occasional sourness hope you know that you are in this tgt with all of usssss!!

Life is like a box of chocolate you may say, but if God is our father we may not know what we are going to get but for sure it will be GREAT beyond our imagination !! (Eph 3:20 :)) and ofc your fav verse - Proverbs 3:5-6 TRUST GOD`,
    mediaType: "image",
    mediaSrc: "/images/gy.jpeg",
  },
  {
    id: 3,
    sender: "Leeanne",
    message: `hi kris! honestly ur story is such a crazy one ahhaha - such a clear testament of God’s love for you, and His faithfulness to His people. it’s a shame we never got to be in the same LG, i think we would’ve been too powerful of a comedic weapon…. (:

thankful for all the laughs we share, and also random convos we end up having. appreciate u looking out and leading our campus these past few year, even though im sure its always a challenge. God sees u bro! and He calls u His faithful servant (: hope you close off this season of your life knowing God’s happy with you

as u go off to polyu (wah feels so weird typing that out..) and into a new season of life too, i pray that you would experience a freshness in your relationship with God and with people. would God’s love be so sweet to you this coming year!

never lose ur sillyness broda (:`,
    mediaType: "image",
    mediaSrc: "/images/leeanne.jpeg",
  },
  {
    id: 4,
    sender: "Ethan",
    message: `Hey brooo!! Crazy that you're transitioning into a different context but I believe and trust that God's gotchu! It's been a joy living life and serving with you over the past several years and through it all, I see how God is working in your life and using you to also lead others to Christ. Thankful for the many many discipleship moments and of course the joy, brotherhood, and memories we were able to share over the years. In this new season of your life, I pray that you can hold onto God that much more, believing that He is purposeful in all that He does. Know that you will always have people around to support you and no matter where and how God leads, may that be a walk filled with joy!`,
    mediaType: "image",
    mediaSrc: "/images/ethan.jpeg",
  },
  {
    id: 5,
    sender: "Joan",
    message: `Hi Kris, crazy to think you’ve been serving in UST for 10 years now. Thank you for being our leader (pointing our campus to be more like Christ), and someone who is dependable and we can trust and rely on to love God and His people. And just know that we’re going to miss you a lot :”( cos you’re so silly sih LOL. It’s been such a privilege to serve the Lord together these past 5 years (das crazy, it’s half of your UST journey LOL). And I believe God uses every moment, and I wouldn’t have wanted it to go any other way. Reminder: 1. Even if you mess up or are imperfect, we (God and others) love you AS YOU ARE (you’re never ever alone) 2. Therefore, just have funnn and live life with others, don’t overcomplicate it! 3. God goes before you. He is the one who has started the good work in you, and He will be the one who brings it into completion, so TRUST in Him.`,
    mediaType: "image",
    mediaSrc: "/images/joan.jpeg",
  },
  {
    id: 6,
    sender: "FAVOURITE MEMORY",
    message: `first ocr with kris, where we wandered for 30min — couldnt find a photo of us tgt AHHA`,
    mediaType: "image",
    mediaSrc: "/images/rei-fav-memory.jpeg",
  },
  {
    id: 7,
    sender: "FAVOURITE MEMORY",
    message: `Fav memory: ooh how could i forget our UNO SEM1 SALT convo at the tko yellow japanese resto AHAHHAHA but genuinely blessed by you Kris and the different sharings really felt like you just wanted to understand, help me see my thinking, and just turn to Jesus in that process of thinking decision-making and living life 🙏🏼 makasih for speaking truth in love`,
    mediaType: "image",
    mediaSrc: "/images/joan-fav-memory.jpeg",
  },
  {
    id: 8,
    sender: "FAVOURITE MEMORY",
    message: `Our mtr/lohas convos that ranges from memes to kpop to like.. repentance ahahahah 🫶🏼 enjoyed every bit`,
    mediaType: "image",
    mediaSrc: "/images/gy-fav-memory.jpeg",
  },
  {
    id: 9,
    sender: "FAVOURITE MEMORY",
    message: `bro uwu-ing in nepal`,
    mediaType: "image",
    mediaSrc: "/images/leeanne-fav-memory-1.jpeg",
  },
  {
    id: 10,
    sender: "FAVOURITE MEMORY",
    message: `bro learning how to take selfies in japan`,
    mediaType: "image",
    mediaSrc: "/images/leeanne-fav-memory-2.jpeg",
  },
  {
    id: 11,
    sender: "FAVOURITE MEMORY",
    message: ``,
    mediaType: "image",
    mediaSrc: "/images/ethan-fav-memory-1.jpeg",
  },
  {
    id: 12,
    sender: "FAVOURITE MEMORY",
    message: `I lov our planning meetings`,
    mediaType: "image",
    mediaSrc: "/images/ethan-fav-memory-2.jpeg",
  },
  {
    id: 13,
    sender: "FAVOURITE MEMORY",
    message: ``,
    mediaType: "video",
    mediaSrc: "/images/fav-memory-vid.mp4",
  },
  {
    id: 14,
    sender: "David",
    message: `Yow Kris! Woah I heard the news that you are transitioning into a different campus. It has indeed been a very long year serving in HKUST campus, from a regular member, to salt, leader then ET and campus leader for HKUST campus. It has been such a joy bro being part of your journey thoughout the years. There were so many moments that I can’t count how God really used you to speak the truth to my life and to people around you. It was very much evident how much God was working in you and through you bro. Will really miss being in the same campus but hey i will be waiting for you in city ministry haha.

I know there are some transitions happening in ministry context but will be keeping you in prayers bro. That you will not try to go through this alone but learn to open up and involve people around you who will love and care for you (even though it might not be the way you expect it to be 🙂) Continue to be led by the spirit bro as you pause and go back to God. Been really encouraged to see how you have been making decisions out of faith. Excited for the next chapter of your life and please learn to pause and trust in God and people around you!`,
    mediaType: "image",
    mediaSrc: "images/david.jpeg",
  },
  {
    id: 15,
    sender: "BIBLE VERSES",
    message: `Deuteronomy 31:8 "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.”`,
    mediaType: "image",
    mediaSrc: "/images/AYW.jpg",
  },
  {
    id: 16,
    sender: "BIBLE VERSES",
    message: `Psalm 9:1 “I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds.”`,
    mediaType: "image",
    mediaSrc: "/images/ETA_ Kris_fav_moment.jpg",
  },
  {
    id: 17,
    sender: "BIBLE VERSES",
    message: `Philippians 1:6 “And I am sure of this, that he who began a good work in you will bring it to completion at the day of Jesus Christ.”`,
    mediaType: "image",
    mediaSrc: "/images/Finesse_ First_LG_leadin.jpg",
  },
  {
    id: 18,
    sender: "BIBLE VERSES",
    message: `Romans 8:38-39 “For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.”`,
    mediaType: "image",
    mediaSrc: "/images/Flare_ Kris_ highlight.jpg",
  },
  {
    id: 19,
    sender: "BIBLE VERSES",
    message: `Psalm 23:1-4 "The Lord is my shepherd, I lack nothing.
2     He makes me lie down in green pastures,
he leads me beside quiet waters,
3     he refreshes my soul.
He guides me along the right paths
    for his name’s sake.
4 Even though I walk
    through the darkest valley,
I will fear no evil,
    for you are with me;
your rod and your staff,
    they comfort me."`,
    mediaType: "image",
    mediaSrc: "/images/Kris_SALT.jpeg",
  },
  {
    id: 20,
    sender: "WORSHIP SONG",
    message: `God I’m Just Grateful (Chandler Moore and Elevation Worship)`,
    mediaType: "image",
    mediaSrc: "/images/Kris UST Campus leader (3).jpg",
  },
  {
    id: 21,
    sender: "WORSHIP SONG",
    message: `As You Find Me (Hillsong UNITED)`,
    mediaType: "image",
    mediaSrc: "/images/KRIS_ BAPTISM.jpg",
  },
  {
    id: 22,
    sender: "WORSHIP SONG",
    message: `Sing of This (Bethel)`,
    mediaType: "image",
    mediaSrc: "/images/Kris_ First LG.jpeg",
  },
  {
    id: 23,
    sender: "WORSHIP SONG",
    message: `LILAC (IU) - not only is this kinda ur fav color but it talks about happy goodbye and being excited for the change after all the different season one has experienced. Hoho praying you can WHOLEHEARTEDLY sing its a happy thing💜`,
    mediaType: "image",
    mediaSrc: "/images/Kris_ First UST LT.jpeg",
  },
  {
    id: 24,
    sender: "WORSHIP SONG",
    message: `Move Your Heart (Maverick City Music and UPPERROOM) - woah just reminded of that one prayer when you taught/led this song hehe praying that you can joyfully just focus on God's heart and also His heart for you above all else !! :) to just burn with the desire to love Him as you are SO touched and moved and loved and fueled by Him.`,
    mediaType: "image",
    mediaSrc: "/images/KRIS_ UST LT (2).jpeg",
  },
  {
    id: 25,
    sender: "WORSHIP SONG",
    message: `Here Again (Elevation Worship) - Krisss Trust in the Lord who is good and wherever you are HE is there with you and He will work through and in you!!! He will do His great things again and again! In your weakness His glory will SHINE!!`,
    mediaType: "image",
    mediaSrc: "/images/Palette.jpg",
  },
  {
    id: 26,
    sender: "WORSHIP SONG",
    message: `Sukidakara (Yuika)`,
    mediaType: "image",
    mediaSrc: "/images/UNO.jpg",
  },
  {
    id: 27,
    sender: "FAVOURITE MEMORY",
    message: `I can still vividly remember when we were trying to rush to push some quick changes for the giving tuesday (I think) haha. I was so stressed but i like how you were making puns behind me haha, but it helped me calm down and we were able to push it haha
    But I couldn't find that picture so my second favourite memory is camping with you haha, IT WAS SO CHAOTIC hahaha but SO FUNNN.`,
    mediaType: "image",
    mediaSrc: "/images/david-fav-memory.jpeg",
  },
];

const CAPSULE_COLORS = [
  { colorTop: "#fff7f8", colorBottom: "#ee9ab0" },
  { colorTop: "#fff7db", colorBottom: "#ffa83e" },
  { colorTop: "#f8f6ef", colorBottom: "#57c84d" },
  { colorTop: "#f8f6ef", colorBottom: "#b663e8" },
  { colorTop: "#eef7ff", colorBottom: "#4ea8ff" },
  { colorTop: "#fff6ef", colorBottom: "#ff7b7b" },
];

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function CapsuleBall({ top, bottom, size = "94px" }) {
  return (
    <Box
      position="relative"
      w={size}
      h={size}
      borderRadius="full"
      border="3px solid #111"
      overflow="hidden"
      bg={top}
      boxShadow="0 10px 22px rgba(0,0,0,0.18)"
    >
      <Box
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        h="49%"
        bg={bottom}
        borderTop="3px solid #111"
      />

      <Box
        position="absolute"
        top="16%"
        right="16%"
        w="18%"
        h="5px"
        bg="rgba(255,255,255,0.78)"
        borderRadius="full"
        transform="rotate(-24deg)"
      />

      <Text
        position="absolute"
        bottom="14%"
        left="50%"
        transform="translateX(-50%)"
        fontSize={{ base: "8px", md: "10px" }}
        fontWeight="bold"
        color="white"
        textShadow="0 1px 2px rgba(0,0,0,0.35)"
        lineHeight="1"
        letterSpacing="0.04em"
        zIndex="1"
        pointerEvents="none"
      >
        UST
      </Text>
    </Box>
  );
}

const Gatcha = () => {
  const {
    isOpen: isRewardOpen,
    onOpen: openReward,
    onClose: closeReward,
  } = useDisclosure();

  const {
    isOpen: isFinishedOpen,
    onOpen: openFinished,
    onClose: closeFinished,
  } = useDisclosure();

  const [knobRotation, setKnobRotation] = useState(0);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [currentCapsule, setCurrentCapsule] = useState(null);
  const [openedCapsule, setOpenedCapsule] = useState(null);
  const [canOpenCapsule, setCanOpenCapsule] = useState(false);
  const [lastColorIndex, setLastColorIndex] = useState(null);

  const capsuleSize = useBreakpointValue({
    base: "46px",
    sm: "52px",
    md: "58px",
    lg: "64px",
  });

  useEffect(() => {
    setQueue(shuffleArray(CAPSULES));
  }, []);

  const getRandomColorPair = () => {
    let index;
    do {
      index = Math.floor(Math.random() * CAPSULE_COLORS.length);
    } while (CAPSULE_COLORS.length > 1 && index === lastColorIndex);

    setLastColorIndex(index);
    return CAPSULE_COLORS[index];
  };

  const resetCycle = () => {
    setQueue(shuffleArray(CAPSULES));
    setQueueIndex(0);
    setCurrentCapsule(null);
    setOpenedCapsule(null);
    setCanOpenCapsule(false);
    setKnobRotation(0);
    setLastColorIndex(null);
  };

  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);

  const startBgm = async () => {
    if (!audioRef.current || musicStarted) return;

    try {
      audioRef.current.volume = 0.35;
      await audioRef.current.play();
      setMusicStarted(true);
    } catch (error) {
      console.log("Audio blocked until user interaction.");
    }
  };

  const handleTurn = async () => {
    await startBgm();

    if (currentCapsule || isRewardOpen) return;

    if (queueIndex >= queue.length) {
      openFinished();
      return;
    }

    setCanOpenCapsule(false);
    setKnobRotation((prev) => prev + 90);

    const nextMessage = queue[queueIndex];
    const randomColors = getRandomColorPair();

    setCurrentCapsule({
      ...nextMessage,
      ...randomColors,
    });

    setTimeout(() => setCanOpenCapsule(true), 360);
  };

  const handleCapsuleClick = () => {
    if (!currentCapsule || !canOpenCapsule) return;

    setOpenedCapsule(currentCapsule);
    setCurrentCapsule(null);
    setCanOpenCapsule(false);
    setQueueIndex((prev) => prev + 1);
    openReward();
  };

  const handleRewardClose = () => {
    closeReward();

    if (queueIndex >= queue.length) {
      openFinished();
    }
  };

  const handleFinishedClose = () => {
    closeFinished();
    resetCycle();
  };

  return (
    <Box
      px={{ base: 2, sm: 3, md: 4 }}
      py={{ base: 2, sm: 3, md: 4 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <audio ref={audioRef} loop preload="auto">
        <source
          src={`${process.env.PUBLIC_URL}/audio/bgm.mp3`}
          type="audio/mpeg"
        />
      </audio>
      <Box
        position="relative"
        h={{ base: "55dvh", md: "80vh" }}
        maxH="80dvh"
        aspectRatio="1080 / 1430"
      >
        <Image
          src={`${process.env.PUBLIC_URL}/images/gatcha-machine.png`}
          alt="Gacha machine"
          w="100%"
          h="100%"
          objectFit="contain"
          display="block"
          userSelect="none"
          draggable="false"
        />

        <Box
          as="button"
          type="button"
          onClick={handleTurn}
          position="absolute"
          left="31.6%"
          top="58.4%"
          w="35.8%"
          h="21.4%"
          bg="transparent"
          border="none"
          p="0"
          cursor={currentCapsule || isRewardOpen ? "default" : "pointer"}
          aria-label="Rotate knob"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/gatcha-knob.png`}
            alt="Gacha knob"
            w="100%"
            h="100%"
            objectFit="contain"
            transform={`rotate(${knobRotation}deg)`}
            transition="transform 0.45s ease"
            transformOrigin="50% 50%"
            userSelect="none"
            draggable="false"
            pointerEvents="none"
          />
        </Box>

        {currentCapsule && (
          <Box
            as="button"
            type="button"
            onClick={handleCapsuleClick}
            disabled={!canOpenCapsule}
            position="absolute"
            right={{ base: "21.2%", md: "20.2%" }}
            bottom={{ base: "9.4%", md: "9.6%" }}
            transform="translate(18%, 8%)"
            bg="transparent"
            border="none"
            p="0"
            m="0"
            lineHeight="0"
            cursor={canOpenCapsule ? "pointer" : "default"}
            aria-label="Open capsule"
          >
            <Box animation="dropCapsule 0.42s ease both">
              <CapsuleBall
                top={currentCapsule.colorTop}
                bottom={currentCapsule.colorBottom}
                size={capsuleSize}
              />
            </Box>
          </Box>
        )}
      </Box>

      <Modal
        isOpen={isRewardOpen}
        onClose={handleRewardClose}
        isCentered
        size={{ base: "full", md: "5xl" }}
      >
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent
          borderRadius={{ base: "0", md: "24px" }}
          overflow="hidden"
          mx={{ base: 0, md: 4 }}
          minH={{ base: "100dvh", md: "auto" }}
        >
          <ModalCloseButton zIndex="2" />
          <ModalBody p="0">
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              minH={{ base: "100dvh", md: "440px" }}
            >
              <Flex bg="#fff9ef" p={{ base: 6, md: 10 }} align="center">
                <Box maxH={{ base: "50dvh", md: "360px" }} overflowY="auto">
                  {openedCapsule?.sender && (
                    <Heading mb="4" size={{ base: "md", md: "lg" }}>
                      {openedCapsule.sender}
                    </Heading>
                  )}

                  <Text
                    whiteSpace="pre-wrap"
                    fontSize={{ base: "sm", md: "md" }}
                    lineHeight="1.8"
                  >
                    {openedCapsule?.message}
                  </Text>
                </Box>
              </Flex>

              <Flex
                bg="#f4f1f8"
                align="center"
                justify="center"
                p={{ base: 4, md: 8 }}
              >
                {openedCapsule?.mediaType === "video" ? (
                  <Box
                    as="video"
                    src={openedCapsule?.mediaSrc}
                    controls
                    autoPlay
                    muted
                    loop
                    w="100%"
                    maxH={{ base: "42dvh", md: "340px" }}
                    borderRadius="18px"
                  />
                ) : (
                  <Image
                    src={openedCapsule?.mediaSrc}
                    alt="Gacha Image"
                    w="100%"
                    maxH={{ base: "42dvh", md: "340px" }}
                    objectFit="contain"
                    borderRadius="18px"
                  />
                )}
              </Flex>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isFinishedOpen}
        onClose={handleFinishedClose}
        isCentered
        size="md"
      >
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent borderRadius="20px" mx="4">
          <ModalCloseButton />
          <ModalBody pt="12" pb="6" px="6">
            <Heading size="md" mb="3">
              That's all the messages!
            </Heading>
            <Text>
              You've opened every capsule once. Close this popup to reset and
              start again.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleFinishedClose} colorScheme="orange">
              Reset
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        as="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes dropCapsule {
              0% { transform: translateY(-18px) scale(0.92); opacity: 0; }
              100% { transform: translateY(0) scale(1); opacity: 1; }
            }
          `,
        }}
      />
    </Box>
  );
};

export default Gatcha;
