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
  // ideas
  {
    id: "9",
    image:
      "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 606 / 910,
    type: "idea",
  },
  {
    id: "10",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 644 / 910,
    type: "idea",
  },
  {
    id: "11",
    image:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 606 / 910,
  },
  {
    id: "12",
    image:
      "https://i.pinimg.com/736x/2f/1e/0c/2f1e0cd93eb15b318a1de7f35ce2d816.jpg",
    aspectRatio: 512 / 910,
    type: "idea",
  },
  {
    id: "13",
    image:
      "https://i.pinimg.com/736x/67/b6/43/67b6434993b2f47cc4d9d713c3a7e0fd.jpg",
    aspectRatio: 450 / 675,
    type: "idea",
  },
  {
    id: "14",
    image:
      "https://i.pinimg.com/736x/7c/a0/72/7ca072e277e2617a759f25e6618d640b.jpg",
    aspectRatio: 697 / 910,
    type: "idea",
  },
  {
    id: "716",
    image:
      "https://i.pinimg.com/736x/60/19/e1/6019e11e92e0d677874bd437f9a4d86a.jpg",
    aspectRatio: 444 / 754,
    type: "idea",
  },
  {
    id: "16",
    image:
      "https://i.pinimg.com/736x/2a/fd/c9/2afdc9c5dc5e18d333046cd06b1e015b.jpg",
    aspectRatio: 682 / 910,
    type: "idea",
  },
];

export const getRecommendation = () => {
  return feedData.filter((item) => item.type === "recommendation");
};

export const getIdeas = () => {
  return feedData.filter((item) => item.type === "idea");
};

export const getItem = (id: string) => {
  return feedData.find((item) => item.id === id);
};
