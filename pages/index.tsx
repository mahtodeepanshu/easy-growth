import Image from "next/image";
import { Inter } from "next/font/google";
import AutoPlayVideo from "@/components/AutoPlayVideo";
const inter = Inter({ subsets: ["latin"] });

import eg_logo from "/public/homepage/eg-logo.svg"
import eg_logo_white from "/public/homepage/eg-logo-white.svg"
import person from "/public/homepage/person.png"
import demo from "/public/homepage/demo.png"
import jim from "/public/homepage/jim.png"
import robert from "/public/homepage/robert.png"
import bernd from "/public/homepage/bernd.png"
import arrow from "/public/homepage/arrow.svg"
import smi from "/public/homepage/smi.png"
import unified_inbox from "/public/homepage/unified_inbox.png"
import ai from "/public/homepage/ai.png"
import spam from "/public/homepage/spam.png"
import email_deliverability from "/public/homepage/email_deliverability.png"
import crafting_mail from "/public/homepage/crafting_mail.png"



export default function Home() {
  return (
    <div className="bg-white">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Image 
          src = {eg_logo}
          alt="EasyGrowth"
          width={300}
          height={100}
        />
        <ul className="flex items-center space-x-8">
          <li>
            <a className="text-lg text-[#1a202c] hover:text-[#5a67d8]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg text-[#1a202c] hover:text-[#5a67d8] " href="#">
              Solution
            </a>
          </li>
          <li>
            <a className="text-lg text-[#1a202c] hover:text-[#5a67d8]" href="#">
              Industries
            </a>
          </li>
          <li>
            <a className="text-lg text-[#1a202c] hover:text-[#5a67d8]" href="#">
              Resources
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
            Log In
          </button>
          <button className="bg-white text-[#0170BF] border-[#0170BF] outline font-semibold py-2 px-4 rounded-lg  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Talk to us</button>
        </div>
      </nav>
      <header className="container mx-auto flex items-center justify-between px-4 py-20">
        <div className="flex-1 px-20">
          <h2 className="text-5xl font-bold text-[#1a202c] leading-tight mb-4">
            Sales outreach platform that enables connections with your relevant market.
          </h2>
          <p className="text-lg text-[#4a5568] mb-6">
            Nurture relevant leads, build relationships, automate scaled growth with AI. No templates, only
            hyperpersonalized, unique interactions at scale.
          </p>
          <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Upscale now</button>
        </div>
        <div className="flex-1">
          <Image
            src={person}
            alt="Business person"
            width={400}
            height={300}
          />
        </div>
      </header>

      <div className="bg-black flex items-center mx-auto justify-center h-full w-full p-10">
        <div>
          <Image
            src={arrow}
            alt="arrow"
            width={50}
            height={50}
          />
        </div>
        <div className="ml-4"> {/* Adjust the margin as needed for spacing between the image and text */}
          <p className="text-3xl font-bold text-white mb-2">Generative AI revolutionising talent sourcing</p>
        </div>
      </div>


      <div>
        <div className="flex w-full rounded-lg bg-white px-40 py-20 ">
          <div className="flex-1 flex-col justify-between p-10">
              <h2 className="text-3xl font-bold text-black pb-10">
                Upscale your outreach, with unique hyper-personalized messaging
              </h2>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
          </div>
          <div className="flex-1">
            <ul className="mt-4 space-y-2 text-[#003366]">
              <li className="py-7 text-1xl">Our platform caters to</li>
              <li>• Generate ideal prospects</li>
              <li>• AI-Enhanced Lead Rating</li>
              <li>• Integrated Campaign Management</li>
              <li>• Accelerated Growth Strategies</li>
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image
              src={demo}
              alt="demo-pic"
              width={300}
              height={500}
            />
          </div>
        </div>
        <div className="my-20 mx-40 items-center justify-center">
            <AutoPlayVideo url={"/homepage/easy-growth.mp4"} />
        </div>

      </div>


      <div className="container mx-auto px-4 pt-20 mb-40">
        <div className="text-center mb-12 text-black">
          <h2 className="text-5xl font-semibold">Your All-in-one Campaign Management Platform.</h2>
        </div>

        <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Image 
                src = {smi}
                alt="Seamless Mailbox Integration"
                width={450}
                height={100}
                />
            <div className="ml-12 px-10">
              <h2 className="text-2xl text-black font-semibold leading-tight">Seamless Mailbox Integration</h2>
              <p className="my-4 text-base leading-relaxed text-gray-600">
                Easily connect multiple mailboxes within a single browser tab. Utilize Gmail, LinkedIn, or establish your
                infrastructure swiftly. Manage all your email communication efficiently and effortlessly.
              </p>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="ml-12 px-10">
              <h2 className="text-2xl text-black font-semibold leading-tight">Ensuring Deliverability: Stay Clear of Spam</h2>
              <p className="my-4 text-base leading-relaxed text-gray-600">
                Implement proactive measures to warm up each mailbox, ensuring high open rates. Validate email addresses meticulously to maintain a minimal bounce rate, guaranteeing that your emails reach their intended recipients consistently.
              </p>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
            </div>
            <Image 
              src = {spam}
              alt="Ensuring Deliverability: Stay Clear of Spam"
              width={450}
              height={100}
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Image 
              src = {ai}
              alt="AI-Powered Personalization at Scale"
              width={450}
              height={100}
            />
            <div className="ml-12 px-10">
              <h2 className="text-2xl text-black font-semibold leading-tight">AI-Powered Personalization at Scale</h2>
              <p className="my-4 text-base leading-relaxed text-gray-600">
                Revolutionize your email outreach by saying goodbye to generic templates. Leverage AI to personalize emails within seconds, using comprehensive seller and buyer data. Say farewell to the time-consuming process of manual personalization.
              </p>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="ml-12 px-10">
              <h2 className="text-2xl text-black font-semibold leading-tight">Email Crafting Across Multiple Mailboxes</h2>
              <p className="my-4 text-base leading-relaxed text-gray-600">
                Craft distinct and personalized emails programmatically across 2 or 20 mailboxes. Leverage buyer data from sources like LinkedIn profiles and websites to enhance email reply rates and deliverability, regardless of the language.
              </p>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
            </div>
            <Image 
              src = {crafting_mail}
              alt="Email Crafting Across Multiple Mailboxes"
              width={450}
              height={100}
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Image 
                src = {email_deliverability}
                alt="Email Deliverabilty Assurance"
                width={450}
                height={100}
              />
            <div className="ml-12 px-10">
              <h2 className="text-2xl text-black font-semibold leading-tight">Email Deliverability Assurance</h2>
              <p className="my-4 text-base leading-relaxed text-gray-600">
                Safeguard your emails from spam filters by utilizing our advanced warm-up infrastructure. Employ machine learning and GPT-4 to create unique, profile-based email content. Validate email addresses beforehand to eliminate issues associated with templates and ensure optimal deliverability.
              </p>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
            </div>
            
          </div>
        </div>
        <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="ml-12 px-10">
              <h2 className="text-2xl text-black font-semibold leading-tight">Unified Inbox Overview</h2>
              <p className="my-4 text-base leading-relaxed text-gray-600">
                Simplify your email management with EasyGrowth. View replies across all your inboxes – Gmail,  LinkedIn, and more – in a single, unified interface. Get an overview of your revenue-related email activities seamlessly.
              </p>
              <button className="bg-[#0170BF] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Book demo
              </button>
            </div>
            <Image 
              src = {unified_inbox}
              alt="Unified Inbox Overview"
              width={450}
              height={100}
            />
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 pt-20 mb-40">
        <div className="text-center mb-12 text-black">
          <h2 className="text-5xl font-semibold">Meet our exceptional advisors.</h2>
          <p className="text-xl mt-4">Providing us with exceptional expertise and strategic insight</p>
        </div>
        <div className="grid grid-flow-col justify-center space-x-8 h-96">
          <div className="w-[300px] h-full">
            <div className="bg-[#0077b5] p-4 rounded-t-lg">
              <Image
                src = {jim}
                alt="jim"
                width={300}
                height={300}
              />
            </div>
            <div className="bg-[#0077b5] px-7 pb-7 rounded-b-lg ">
              <h3 className="text-lg font-semibold">Jim Moffatt</h3>
              <p className="text-sm">Ex-Vice Chairman & Global CEO, Deloitte Consulting</p>
            </div>
          </div>
          <div className="w-[300px] h-full">
            <div className="bg-[#0077b5] p-4 rounded-t-lg">
            <Image
                src = {robert}
                alt="robert"
                width={300}
                height={300}
              />
            </div>
            <div className="bg-[#0077b5] px-7 pb-7 rounded-b-lg ">
              <h3 className="text-lg font-semibold">Robert McNutt</h3>
              <p className="text-sm">Advisor - Forescout Technologies Inc.</p>
            </div>
          </div>
          <div className="w-[300px] h-full">
            <div className="bg-[#0077b5] p-4 rounded-t-lg">
              <Image
                  src = {bernd}
                  alt="bernd"
                  width={300}
                  height={300}
                />
            </div>
            <div className="bg-[#0077b5] px-7 pb-7 rounded-b-lg ">
              <h3 className="text-lg font-semibold">Bernd Waltermann</h3>
              <p className="text-sm">BCG Senior Partner Emeritus</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#1a1a1a]">
      <div className="bg-[#0170BF] py-16 px-4 text-center text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold px-5 py-5">Ready to get started?</h2>
        <button className="bg-white text-[#0170BF] font-semibold px-4 h-10 w-40 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Upscale now</button>
      </div>
      <div className="py-16 px-4 text-white ">
        <div className="m-50 align-center flex gap-20 justify-center">
          <div className="w-60">
          <Image 
            src = {eg_logo_white}
            alt="Description of your image"
            width={200}
            height={100}
          />

            <p className="mb-4 text-[#9d9d9d] p-3">
              Nurture relevant leads, build relationships, automate scaled growth with AI. No templates, only
              hyperpersonalized, unique interactions at scale.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              
            </div>
          </div>
          <div >
            <h4 className="text-xl font-semibold mb-4">Solution</h4>
            <ul className="text-[#9d9d9d]">
              <li className="mb-2">Generate</li>
              <li className="mb-2">Prospects</li>
              <li className="mb-2">Lead Rating</li>
              <li className="mb-2">Engage</li>
              <li className="mb-2">Prospects</li>
              <li className="mb-2">Analytic</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Industries</h4>
            <ul className="text-[#9d9d9d]">
              <li className="mb-2">Technology and Software (SaaS)</li>
              <li className="mb-2">IT and Network Services</li>
              <li className="mb-2">Marketing and Advertising Agencies</li>
              <li className="mb-2">Corporate Training and Development</li>
              <li className="mb-2">Professional Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="text-[#9d9d9d]">
              <li className="mb-2">Blog</li>
              <li className="mb-2">Help center</li>
              <li className="mb-2">Sales glossary</li>
              <li className="mb-2">Knowledge center</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
}
