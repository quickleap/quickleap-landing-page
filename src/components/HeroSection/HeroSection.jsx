import HeroImage from '../../assets/hero-image.png'
import InventoryImage from '../../assets/inventory.png'
import GrowForLifeImage from '../../assets/grow-for-life.png'
import MealPlannerImage from '../../assets/meal-planner.png'
import { HeroInfo } from './HeroStyles'
import Carousel from 'nuka-carousel';

const HeroSection = () => {
   return (
      <Carousel 
         className="w-full relative min-h-[86vh]"
         autoplay="true"
         speed={800}
         withoutControls="true"
         pauseOnHover="true"
         wrapAround="true"
      >
         <div className="w-full 4xl:max-w-[1900px] min-h-[86vh] mx-auto flex flex-col pt-10 lg:pt-0 lg:flex-row items-center px-10 3xl:px-24">
            <HeroInfo className=" w-full lg:max-w-md xl:max-w-2xl 4xl:max-w-[900px]">
               <h2 className="font-bold text-[#313131] text-[30px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 4xl:text-[65px]">
                  Good food for <span className="text-green">everyone, everywhere,</span> everytime.
               </h2>
               <p className="my-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl break-words">
                  We exist to promote your life, providing all the food you’ll need to live a healthy and happy life from infancy to adulthood, enabling businesses by providing access to well graded raw materials at scale, while, transforming the communities we operate in.
               </p>
               <button>Coming soon</button>
            </HeroInfo>
            <div className="flex  p-0 w-full mt-10 lg:mt-0 lg:w-[576px] xl:w-[640px] lg:ml-16 xl:ml-20">
               <img src={HeroImage} alt="hero img" className="object-fill w-full"/>
            </div>
         </div>

         <div  className="w-full 4xl:max-w-[1900px] min-h-[86vh] mx-auto flex flex-col pt-10 lg:pt-0 lg:flex-row items-center px-10 3xl:px-24">
            <HeroInfo className=" w-full lg:max-w-md xl:max-w-2xl 4xl:max-w-[900px]">
               <h2 className="font-bold text-[#313131] text-[30px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 4xl:text-[65px]">
                  Inventory Manager
               </h2>
               <p className="my-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl break-words">
                  The Inventory Manager provides the tools for restaurants, food businesses and processors to plan out ahead all of their raw material needs and have them delivered wherever, & whenever all year round
               </p>
               <button>Coming soon</button>
            </HeroInfo>
            <div className="flex  p-0 w-full mt-10 lg:mt-0 lg:w-[576px] xl:w-[640px] lg:ml-16 xl:ml-20">
               <img src={InventoryImage} alt="hero img" className="object-fill w-full"/>
            </div>
         </div>

         <div  className="w-full 4xl:max-w-[1900px] min-h-[86vh] mx-auto flex flex-col pt-10 lg:pt-0 lg:flex-row items-center px-10 3xl:px-24">
            <HeroInfo className=" w-full lg:max-w-md xl:max-w-2xl 4xl:max-w-[900px]">
               <h2 className="font-bold text-[#313131] text-[30px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 4xl:text-[65px]">
                  Grow For Life
               </h2>
               <p className="my-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl break-words">
                  At Grow for life we curate the best seeds, and plant them in the best conditions to produce food that is  nourishing and beautiful to look at. Subscribe for weekly or monthly delivery of super fresh food, proteins, and groceries.
               </p>
               <button>Coming soon</button>
            </HeroInfo>
            <div className="flex  p-0 w-full mt-10 lg:mt-0 lg:w-[576px] xl:w-[640px] lg:ml-16 xl:ml-20">
               <img src={GrowForLifeImage} alt="hero img" className="object-fill w-full"/>
            </div>
         </div>

         
         <div  className="w-full 4xl:max-w-[1900px] min-h-[86vh] mx-auto flex flex-col pt-10 lg:pt-0 lg:flex-row items-center px-10 3xl:px-24">
            <HeroInfo className=" w-full lg:max-w-md xl:max-w-2xl 4xl:max-w-[900px]">
               <h2 className="font-bold text-[#313131] text-[30px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 4xl:text-[65px]">
                  Meal Planner
               </h2>
               <h5 className="text-[#909090] text-xl font-medium mt-2">You plan, We prepare, you eat!</h5>
               <p className="my-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl break-words">
                  The meal planner provides you with the tools to plan out your meals monthly from a wide variety of local and foreign cusines, well curated and prepared with love by chefs and restaurants you love. 
               </p>
               <button>Coming soon</button>
            </HeroInfo>
            <div className="flex  p-0 w-full mt-10 lg:mt-0 lg:w-[576px] xl:w-[640px] lg:ml-16 xl:ml-20">
               <img src={MealPlannerImage} alt="hero img" className="object-fill w-full"/>
            </div>
         </div>
      </Carousel>
   )
}

export default HeroSection