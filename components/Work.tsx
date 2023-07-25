import Card from "./Card";
import Testimonial from "./Testimonial";


const Work = () => {



  return (<div id='work-section' className="px-5 md:px-10 lg:px-20 pt-7 pb-7 md:pb-16 lg:pt-16 lg:pb-16">

    <div className=" relative z-0 mb-20">
      <p className="font-800 text-8xl md:text-9xl opacity-10 tracking-wide">02</p>
      <div className="absolute inset-0 z-10 top-8 md:top-10">
        <p className="text-3xl md:text-5xl font-bold tracking-widest font-sora text-lightGray">Selected Works.</p>
      </div>
    </div>

    <div className="flex gap-4 lg:gap-0 justify-center lg:justify-between flex-wrap">

      <Card description="Implemented the back-end part of nHub Nigeria's official website." site='https://nhubnigeria.ng/' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239281/ScreenShot_Tool_-20230405063538_asgt9z.png' />

      <Card description="Collaborated with some developers to develop a site where businesses can register and advertise their products and services. It was implemented using Next JS and Chakra UI for styling." site='https://kasuwangizo.ng/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239293/Screenshot_from_2023-04-05_06-31-13_ryotfu.png" />

      <Card description="Currently working on an e-learning website headed by nHub Nigeria where users can create 'boxes', add participants, and also add learning content to the box. The progress of each participant can be viewed, as well as other information. It is built using Nextjs, React + Vite, and Chakra UI." site='https://pandora.nhubnigeria.ng/' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239265/ScreenShot_Tool_-20230423093915_ttimlo.png' />


      <Card description="Collaboratd with some developers to develop a site for e-learning called infinity-gem ,I work on the backend " site='https://infinity-gem.bluehouseng.com/' image="https://res.cloudinary.com/nhub-charlinto/image/upload/v1686241514/Screenshot_from_2023-06-08_17-24-29_alasnp.png"  />


      
    </div>

    <div>
      <div className="flex justify-center items-center mt-32 mb-12">
        <p className="text-3xl font-bold tracking-widest font-sora text-lightGray text-center lg:text-left">Hear It From Others.</p>

      </div>
      <div>
        <Testimonial />
      </div>
    </div>

  </div>);
}

export default Work;