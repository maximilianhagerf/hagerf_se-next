import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Welcome from "../components/Welcome";

import Content from "../components/Content";
import styles from "../styles/modules/Home.module.css";

// const variants = {
//   hidden: { opacity: 0, x: 0, y: -200 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0  , y: 300 },
// };

export default function Home({ canonical }) {
  return (
    <Content>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.h1
        // variants={variants} // Pass the variant object into Framer Motion
        // initial="hidden" // Set the initial state to variants.hidden
        // animate="enter" // Animated state to variants.enter
        // exit="exit" // Exit state (used later) to variants.exit
        // transition={{ type: "linear" }} // Set the transition to linear
        className={styles.Title}
      >
        <span className={styles.Yellow}>Developer</span> &{" "}
        <span className={styles.Yellow}>Designer</span> with over a{" "}
        <span className={styles.Purple}>decade</span> of experience.
        <br />
        <br />
        I’m <span className={styles.Yellow}>Maximilian Hagerf.</span>
      </motion.h1>

      <Welcome className={styles.Welcome} />

      <h1 className={styles.Title}>
        I build <span className={styles.Yellow}>digital products</span>
      </h1>

      <p className={styles.Paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis,
        lacus vitae laoreet commodo, mi felis fermentum mi, vitae hendrerit
        augue arcu ut nibh. Vestibulum vestibulum porta risus, a efficitur arcu
        tristique ut. Aenean at erat sed sem pulvinar pretium. Cras sodales
        tortor sed mi consectetur, ac lobortis ex congue. Mauris gravida lectus
        eget quam finibus finibus. Quisque nec nisl rhoncus, cursus enim a,
        posuere libero. Etiam in nisl quis ante suscipit rutrum. Etiam nec ante
        ipsum. Maecenas cursus sollicitudin neque vitae rhoncus. Nam facilisis
        erat vel porttitor porta. Donec ultrices, arcu et ultricies hendrerit,
        elit mi eleifend odio, a fermentum neque lacus vel sapien. Nunc quis
        tellus feugiat neque pulvinar malesuada. Duis tristique accumsan
        tincidunt. Praesent consectetur interdum orci eget suscipit. Aenean non
        ullamcorper diam, vitae tincidunt felis. Vestibulum vehicula turpis
        tellus, ut laoreet ante gravida vitae. Sed eu nisl justo. Vestibulum sed
        pretium leo, sit amet hendrerit velit. In non sollicitudin arcu. In
        semper nisl at sodales varius. Mauris venenatis odio vitae metus
        vulputate rutrum. In id vehicula eros. Pellentesque sit amet dolor
        ullamcorper, consectetur felis non, auctor ligula. Nam nec suscipit
        ipsum. Integer in nisl vel lacus dictum volutpat. Curabitur vulputate
        mauris sem, vitae pulvinar mi egestas eu. Phasellus tempor vitae felis
        vel laoreet. Duis diam arcu, ullamcorper id leo quis, ultricies posuere
        lorem. Etiam tincidunt at ligula nec tristique. Ut nibh erat, tempor vel
        turpis vitae, ullamcorper pharetra nisi. Mauris eu malesuada ante. Duis
        tincidunt at velit nec accumsan. Pellentesque condimentum elementum est,
        vel blandit dolor placerat vel. Cras eros felis, fringilla rutrum elit
        id, fermentum pretium orci. Duis eget rutrum quam, quis elementum nulla.
        Donec a lacinia ante. Sed vitae tempus mauris, id bibendum lacus. Cras
        fringilla lectus nec quam ultricies pretium. Curabitur venenatis
        vulputate enim at pretium. Integer et diam in augue venenatis luctus et
        nec nisi. Nullam pellentesque maximus lorem, non vulputate augue finibus
        ac. Suspendisse accumsan libero ut orci hendrerit faucibus. Nunc
        pellentesque erat quis sem laoreet, nec auctor diam faucibus. Vestibulum
        luctus semper posuere. Integer vehicula erat ut nisi dictum, quis
        interdum erat sagittis. Mauris nec imperdiet libero. Aenean malesuada
        sit amet sem et lacinia. Vestibulum quam diam, consectetur sed nisl ut,
        vulputate bibendum nibh. Morbi vitae blandit mi. Praesent vel tincidunt
        lectus, sed ullamcorper urna. Donec leo arcu, porta varius vehicula
        maximus, vulputate et tortor. Sed luctus elit in magna ornare,
        pellentesque ultrices enim finibus. Nullam in lacus efficitur, bibendum
        nunc eu, mollis erat. Vestibulum at ipsum augue. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Sed eget elementum mauris. Phasellus vestibulum fringilla rutrum.
        Quisque dictum ultricies nisi, vel consectetur enim. Maecenas placerat
        in velit vel placerat. Nam posuere velit lacinia lorem egestas
        convallis. Phasellus a viverra mauris. Sed mattis mi sit amet finibus
        volutpat. Etiam enim dui, commodo at finibus at, dictum nec massa. In
        feugiat mi at ullamcorper congue. Fusce vel lectus non neque sodales
        pharetra. In mattis dolor vel lacus sagittis blandit. Aenean scelerisque
        est ut ante varius, ultrices hendrerit dolor dapibus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vivamus imperdiet id ante sed lobortis. Sed laoreet nisl elementum felis
        volutpat, sit amet cursus felis euismod. In semper blandit rhoncus.
        Curabitur et mauris ac dui facilisis malesuada.
      </p>
    </Content>
  );
}
