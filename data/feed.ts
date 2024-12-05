export const feedData = [
  // recommendations
  {
    id: "1",
    image:
      "https://i.pinimg.com/736x/3c/d3/9d/3cd39dbe7cf52bb7fe538600b4d7d092.jpg",
    aspectRatio: 728 / 910,
    type: "recommendation",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/736x/a1/e8/cd/a1e8cdce050e4d2becb7cf6fe092c930.jpg",
    aspectRatio: 1,
    type: "recommendation",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/736x/65/e4/2b/65e42bf0e9c6b1bc6583cd4152ebc6d8.jpg",
    aspectRatio: 682 / 910,
    type: "recommendation",
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/736x/87/db/4a/87db4a1086ca46c1b08094a63a1860b9.jpg",
    aspectRatio: 682 / 910,
    type: "recommendation",
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/736x/a8/a4/24/a8a4244a7e1341dd6e2ade5ef5355b49.jpg",
    aspectRatio: 559 / 910,
    type: "recommendation",
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/736x/d0/9f/87/d09f872187e7edba854ae4d4b0796abd.jpg",
    aspectRatio: 512 / 910,
    type: "recommendation",
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/736x/da/12/a2/da12a258f0d999aaf5d1024494f08698.jpg",
    aspectRatio: 462 / 754,
    type: "recommendation",
  },
  {
    id: "8",
    image:
      "https://i.pinimg.com/736x/56/2e/18/562e18328adc077395ad2c3da8989d0d.jpg",
    aspectRatio: 512 / 910,
    type: "recommendation",
  },
];

export const getRecommendation = () => {
  return feedData.filter((item) => item.type === "recommendation");
};


export const getItem = (id: string) => {
  return feedData.find((item) => item.id === id);
}