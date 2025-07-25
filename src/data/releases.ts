import image9 from "@/assets/images/release-art/release-9-jj-rupp-cold-hard-man.jpeg";
import image8 from "@/assets/images/release-art/release-8-jj-rupp-world-go-round.jpeg";
import image7 from "@/assets/images/release-art/release-7-jj-rupp-one-more.jpeg";
import image6 from "@/assets/images/release-art/release-6-jj-rupp-make-you-mine.jpeg";
import image5 from "@/assets/images/release-art/release-5-jj-rupp-nobody.jpeg";
import image4 from "@/assets/images/release-art/release-4-jj-rupp-party-for-the-broken-hearted.jpeg";
import image3 from "@/assets/images/release-art/release-3-jj-rupp-the-way-you-lie.jpeg";
import image2 from "@/assets/images/release-art/release-2-jj-rupp-kiss-me.jpeg";
import image1 from "@/assets/images/release-art/release-1-jj-rupp-have-yourself-a-merry-little-christmas.jpeg";
import image0 from "@/assets/images/release-art/release-0-jj-rupp-wild-things.jpeg";

export type ReleaseType = {
  id: number;
  name: string;
  image: {
    src: ImageMetadata;
    alt: string;
  };
  releaseDate: Date;
  listenLink: string;
};

export const releases: ReleaseType[] = [
  {
    id: 9,
    name: "Cold Hard Man",
    image: {
      src: image9,
      alt: "Cover art for 'Cold Hard Man' by JJ Rupp",
    },
    releaseDate: new Date("2025-07-24"),
    listenLink: "https://open.spotify.com/track/0OGRdrHSGAqGLOmpL1nMxA",
  },
  {
    id: 8,
    name: "World Go 'Round",
    image: {
      src: image8,
      alt: "Cover art for 'World Go 'Round' by JJ Rupp",
    },
    releaseDate: new Date("2025-05-09"),
    listenLink: "https://open.spotify.com/track/1QIfiFz0uNpcw5ShbL2AKV",
  },
  {
    id: 7,
    name: "One More",
    image: {
      src: image7,
      alt: "Cover art for 'One More' by JJ Rupp",
    },
    releaseDate: new Date("2023-08-23"),
    listenLink: "https://open.spotify.com/track/3isvZwjZUIXOBNPsrCpn3J",
  },
  {
    id: 6,
    name: "Make You Mine",
    image: {
      src: image6,
      alt: "Cover art for 'Make You Mine' by JJ Rupp",
    },
    releaseDate: new Date("2022-08-12"),
    listenLink: "https://open.spotify.com/album/06DbwRI8teI2GRGKOEWy6c",
  },
  {
    id: 5,
    name: "Nobody",
    image: {
      src: image5,
      alt: "Cover art for 'Nobody' by JJ Rupp",
    },
    releaseDate: new Date("2022-06-24"),
    listenLink: "https://open.spotify.com/track/48OwPYBAuOi5T3hWf9VXVP",
  },
  {
    id: 4,
    name: "Party for the Broken-Hearted",
    image: {
      src: image4,
      alt: "Cover art for 'Party for the Broken-Hearted' by JJ Rupp",
    },
    releaseDate: new Date("2021-11-05"),
    listenLink: "https://open.spotify.com/track/6qKFHfTFxm1Vmrf23GDbiV",
  },
  {
    id: 3,
    name: "The Way You Lie",
    image: {
      src: image3,
      alt: "Cover art for 'The Way You Lie' by JJ Rupp",
    },
    releaseDate: new Date("2021-03-26"),
    listenLink: "https://open.spotify.com/track/5dU2AChWBEHNvmUHdomGBT",
  },
  {
    id: 2,
    name: "Kiss Me",
    image: {
      src: image2,
      alt: "Cover art for Kiss Me",
    },
    releaseDate: new Date("2020-03-20"),
    listenLink: "https://open.spotify.com/track/0xQFAA4bDr1W5JozsIm0Xg",
  },
  {
    id: 1,
    name: "Have Yourself a Merry Little Christmas",
    image: {
      src: image1,
      alt: "Cover art for Have Yourself a Merry Little Christmas",
    },
    releaseDate: new Date("2019-12-13"),
    listenLink: "https://open.spotify.com/track/34Yfq5hfUFRYSDMf112GP5",
  },
  {
    id: 0,
    name: "Wild Things",
    image: {
      src: image0,
      alt: "Cover art for Wild Things",
    },
    releaseDate: new Date("2018-10-19"),
    listenLink: "https://open.spotify.com/album/6VxMRteYSqFfWaYmIadmx9",
  },
];
