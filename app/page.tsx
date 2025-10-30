import { Button } from "./components/button";
import { Container } from "./components/container";

export default function Home() {
  return (
    <Container>
      <div className="xl:w-[805px] flex flex-col xl:items-center gap-4 xl:gap-3 mt-12 xl:mt-20 " >
        <h1 className="textpresent-1 text-neutral-900 text-left xl:text-center">
          <div className="inline relative z-50 ">Healthy <div className="absolute bg-orange-500/40 w-full h-[23px] md:h-[29px] xl:h-[39px] bottom-3 md:bottom-4 xl:bottom-3 right-0 rounded-sm -z-10 " ></div> </div> meals, zero fuss
        </h1>
        <p className="textpresent-6 text-neutral-800 text-left xl:text-center xl:w-[580px] mb-4 ">
          Discover eight quick, whole-food recipes that you can cook
          tonight—no processed junk, no guesswork.
        </p>
        <Button label="Start exploring" link="/" wFull={false}   />
      </div>
    </Container>
  );
}
