import { data } from "@/app/mock/data";
const Hero = () => {
  return (
    <div>
      <p>Stays in {data.City}</p>
      <button>Free cancellation</button>
      <button>Price</button>
      <button>Instant Book</button>
    </div>
  );
};
export default Hero;
