interface Props {
  className: string;
}

function HomeBackground({ className }: Props) {
  return <div className={`absolute ${className} bottom-0 -z-[1] border-b-[55vh] lg:border-b-[35vw]`}></div>;
}

export default HomeBackground;
