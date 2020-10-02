import IntroImg from "./undraw_alien_science_nonm.svg"
import DesignHouseImg from "./undraw_product_iteration_kjok.svg"
import RnDPImg from "./undraw_prototyping_process_rswj.svg"
import EnthusiastsImg from "./undraw_researching_22gp.svg"
import DspImg from './undraw_signal_searching_bhpc.svg'
import DsImg from './undraw_data_xmfy.svg'
import HWImg from './hardware.svg'
import EEImg from './undraw_circuit_board_4c4d.svg'
import IoTImg from './AI.svg'
import ExpertiseTitleImg from './undraw_experience_design_eq3j.svg'

import DevImg from './dev.svg'
import EngImg from './progress.svg'
import WhyImg from './why.svg'
import FwdImg from './forward.svg'
import ExpertImg from './experts.svg'
import locationImg from './map.svg'
import ninjaImg from './ninja.svg'
import StrImg from './strategy.svg'
import EDIIMG from './edi.jpg'

import AttitutdeTitleImg from './eco1.svg'

import BarixImg from './barix_logo.png'
import UAVImg from './uav.png'
import EricaImg from './EricaLogo.png'
import AretaiImg from './aretai_logo.png'
import LeImg from './Leclanche.png'
import CoastalImg from './CoastalLogo.png'

import CareerImg from './careers.svg'
import NatureImg from './nature.svg'
import ZenImg from './buddha.svg'

const WelcomeBlockTitle = "We are:"
const DesignHouseP = "Design house and outsourcing agency - we help to accelerate your project on any stage with diligence and attention towards details"
const RnDP = "Research and development center -  We develop our know-how in state-of-art technologies"
const EnthusiastsP = "Enthusiasts - We love what we do. We work on our side to provide our clients with advantage in never ending competition"

const ExpertiseBlockTitle = "Our expertise fields are:"
const SignalP = "Signal processing"
const EEP = "Electronics Engineering"
const HWP = "Hardware design"
const IoTP = "IoT & AI"
const MLP = "Data analysis"



const ServicesPageTitle = "Our services"

const DevP = "We develop products and end-to-end solutions for our customers from idea, trough concept and up to application and product level"
const EngP = "We help to accelerate your project by taking part of it on our side and diligently going tough it"
const StrP = "Wide angle view on your process is important. We lift you there. We can help you in finding best possible roadmap"

const forward = "We are forward thinking company. We always focus on long term success, sustainable and reliable solutions"
const proactive = "We are people, and we work for people"
const location ="Located in IT capital of Baltics - Latvia we have access to wide pool of talents and academics. Situated in comfortable time zone we work worldwide and link together west with east. This makes us perfect destination for outsourcing"
const doers = "Hands-on attitude. We are do-ers, not waiters. Call us when development ninjas are needed"
const experts = "We are experienced across many projects and industries."


const welcomeTopics = [
    {id:1, title:"DesignHouse", content:DesignHouseP, icon:DesignHouseImg, alt:"Design House"},
    {id:2, title:"RnD", content:RnDP, icon:RnDPImg, alt:"RND house"},
    {id:3, title:"Attitude", content:EnthusiastsP, icon:EnthusiastsImg, alt:"Attitude"}
];

const expertiseTopics = [
    {id:1, title:"DSP", content:SignalP, icon:DspImg, alt:"DSP"},
    {id:2, title:"DSP", content:EEP, icon:EEImg, alt:"Electronics"},
    {id:3, title:"DSP", content:HWP, icon:HWImg, alt:"Hardware"},
    {id:4, title:"DSP", content:IoTP, icon:IoTImg, alt:"IoT"},
    {id:5, title:"DSP", content:MLP, icon:DsImg, alt:"Data Science"}
]

const attitudeTopics = [
    {id:1, title:"Forward thinking", content:forward, icon:FwdImg, alt:"Eco"},
    {id:2, title:"Experts", content:experts, icon:ExpertImg, alt:"Digital Signal Processing"},
    {id:3, title:"Latvia", content:location, icon:locationImg, alt:"Digital Signal Processing"},
    {id:4, title:"Hands On attitude", content:doers, icon:ninjaImg, alt:"Digital Signal Processing"}
]

const serviceTopics = [
    {id:1, title:"Development services", content:DevP, icon:DevImg, alt:"Development services"},
    {id:2, title:"Engineering services", content:EngP, icon:EngImg, alt:"Development services"},
    {id:3, title:"Strategy services", content:StrP, icon:StrImg, alt:"Strategy services"}
]

const DevList = ["Product development", "Project management", "Product ownership", "ODM", "OEM"]
const EngList = ["Mesh networking","Machine learning","PCB Design", "Schematic design", "EMI/EMC", "Embedded C", "C++", "Python", "Bare metal and RTOS", "VST", "RF and microwave"]
const StratList =["Project technical audit", "Market research", "Data Analysis", "Roadmaps", "Personal training", "Regional support"]

const serviceSkills = [
    {id:1, title:"Development", content:DevList},
    {id:2, title:"Engineering", content:EngList},
    {id:3, title:"Strategy", content:StratList}
]

export const homePage = [
    {id:1, title:WelcomeBlockTitle, contents: welcomeTopics, icon:IntroImg, alt:"We Are:", class: "generic"},
    {id:2, title:ExpertiseBlockTitle, contents: expertiseTopics, class: "deck"},
    {id:3, title:"Why us", contents: attitudeTopics, icon:WhyImg, alt:"Our Expertise", class: "generic"}
];


export const servicePage = [
    {id:1, title:ServicesPageTitle, contents: serviceTopics, class: "visual"},
    {id:2, title:ServicesPageTitle, contents: serviceSkills, class: "VerticalLists"}
];



/////////CLIENTS

const barixP = "Barix is an innovation driven company located in Dübendorf (close to Zürich) that successfully develops audio over IP hardware and solutions."
const UavfP = "UAV Factory Ltd. is one of the world’s leading developers of fixed wing unmanned aircraft systems, subsystems, stabilized EO/IR camera payloads and accessories for small fixed wing unmanned aircraft industry."
const EricaSynthsP = "Erica Synths team of visionaries, engineers and musicians have been working hard to bring you modules and instruments that will set your modular system apart from mass in terms of how it sounds, looks and functions."
const AretaiP = "Aretai is a High-End audio brand from Northern Europe, creating products that combine the concept of Northern Sound of truthful, lively sonic performance with bold and timeless design."
const LeclancheP = "Leclanché SA is a world leading provider of high quality energy storage solutions, based on lithium-ion cell technology, accelerating our progress towards a cleaner energy future. It has over 100 years of battery and energy storage innovation, powered by German engineering and Swiss quality."
const CoastalP = "Coastal Amusements was founded in 1988 and is a leading developer, manufacturer, and importer of ticket redemption games, cranes and coin pushers. We are proud to offer one of the best and most diverse selections of amusement games in the industry today."

const clients = [
    {id:4, title:"Aretai", content:AretaiP, icon:AretaiImg, alt:"Aretai"},
    {id:1, title:"Barix AG", content:barixP, icon:BarixImg, alt:"Barix"},
    {id:6, title:"Coastal amusements", content: CoastalP, icon:CoastalImg, alt:"Coastal"},
    {id:3, title:"Erica Synths", content:EricaSynthsP, icon:EricaImg, alt:"Erica Synths"},
    {id:5, title:"Leclanche SA", content: LeclancheP, icon:LeImg, alt:"Leclanche SA"},
    {id:2, title:"UAV Factory", content:UavfP, icon:UAVImg, alt:"UAV Factory"}
]

export const clientPage = [
    {id:1, title:"Among our clients are:", contents: clients, class: "clients"}
];

////////CAREERS

const InvitationP = "If you are skilled developer, entrepreneur, or just starting your career as intern or junior looking for a practice: don't hesitate to send us our cv"
const WeAreLookingP = "We are quick learners, do-ers with hands on attitude and are blessed with natural curiosity for technology and details"

const careerTopics = [
    {id:1, title:"Intro", content:InvitationP},
    {id:2, title:"Our culture", content:WeAreLookingP},
    {id:3, title:"Open positions", content:"Currently there are no open positions, but feel free to send us our CV so we can keep you in our outsource database!"},
]

export const careerPage = [
    {id:1 , title: "Careers", contents: careerTopics, icon: CareerImg, alt: "Career", class: "generic"}
]



/////ABOUT

const IntroAboutP = "Teknologic is idea is that engineering and development work should be less tied up with specific products, and should be more abstract. We are in state of art - constantly creating, upgrading and trying new, we develop speed without loosing our feelings to what we do."
const LocationP ="Comfortably situated in Riga, Latvia, we work in tight cooperation with many IT specialists and inhabitants of Institute of Electronics, which gives us decent competence and sourcing capabilities"
const CultureP = "In Teknologic we focus on being reliable, dedicated to what we do. We do designs with always thinking best to our customers. We accept all gender and ethnical people as equal, we believe that we are part of life in the Planet and we pay respect for every living creature"
const MissionP ="Our mission is to bring technologies to the people, make life better, more fun and exciting. We want to help visionaries to express themselves. We are part of society that is building new, sustainable world economy"

const aboutTopics = [
    {id:1, title:"Intro", content:IntroAboutP},
    {id:2, title:"Location", content:LocationP, icon: EDIIMG, alt:"EDI"},
    {id:3, title:"Our Culture", content:CultureP, icon: ZenImg, alt:"Zen"},
    {id:4, title:"Our Mission", content:MissionP, icon: NatureImg, alt:"Nature"},
]

export const aboutPage = [

    {id:1 , title: "About TeknoLogic", contents: aboutTopics, class: "generic"},
];
