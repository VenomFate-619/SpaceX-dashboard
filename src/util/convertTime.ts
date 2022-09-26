const giveTime = (time: string) => {
  return new Date(time).toDateString();
};

export default giveTime