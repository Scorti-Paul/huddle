import bgFooterTopDesktop from './assets/bg-footer-top-desktop.svg';
import bgFooterTopMobile from './assets/bg-footer-top-mobile.svg';
import bgSectionBottomDesktop1 from './assets/bg-section-bottom-desktop-1.svg';
import bgSectionBottomDesktop2 from './assets/bg-section-bottom-desktop-2.svg';
import bgSectionBottomMobile1 from './assets/bg-section-bottom-mobile-1.svg';
import bgSectionBottomMobile2 from './assets/bg-section-bottom-mobile-2.svg';
import bgSectionTopDesktop1 from './assets/bg-section-top-desktop-1.svg';
import bgSectionTopDesktop2 from './assets/bg-section-top-desktop-2.svg';
import bgSectionTopMobile1 from './assets/bg-section-top-mobile-1.svg';
import bgSectionTopMobile2 from './assets/bg-section-top-mobile-2.svg';
import iconCommunities from './assets/icon-communities.svg';
import iconMessages from './assets/icon-messages.svg';
import iconEmail from './assets/icon-email.svg';
import iconPhone from './assets/icon-phone.svg';
import flowingConversation from './assets/illustration-flowing-conversation.svg';
import growTogether from './assets/illustration-grow-together.svg';
import yourUsers from './assets/illustration-your-users.svg';
import logo from './assets/logo.svg';
import { ReactComponent as SiteLogo } from './assets/footerLogo.svg';
import screenMockups from './assets/screen-mockups.svg';

import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa'
import GetStartedFreeBtn from './GetStartedFreeBtn';


const Home = () => {
  return (
    <div>
      <header className='pt-4 px-6 md:px-12 md:pt-12 lg:px-[10rem] lg:py-16'>
        <nav className='flex justify-between items-center'>
          <div>
            <img src={logo} className='w-28 md:w-44' alt="huddle logo" />
          </div>
          <a href='/' className='py-1 px-4 border-[1px] border-Pink text-Pink hover:border-lightPink rounded-full hover:text-lightPink'>Try It Free</a>
        </nav>
        <div className='my-[7rem] lg:mt-[14rem]'>
          <div className='md:w-full md:flex md:items-center md:flex-col'>
            <h1 className='md:text-5xl'>Build The Community Your Fans Will Love</h1>
            <p className='w-3/6'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
            <GetStartedFreeBtn />
          </div>
        </div>
        <div className='flex justify-center px-2 md:px-12'>
          <img src={screenMockups} alt="screen mockups" />
        </div>
      </header>

      <main className=' mt-[7rem]'>
        <section className='md:flex md:justify-center md:gap-28'>
          <div className='flex items-center flex-col text-center mb-[6rem]  md:w-1/3'>
            <div className='w-48 md:w-68'>
              <img src={iconCommunities} className='w-8' alt="communities icon" />
              <h1 className='text-7xl md:text-8xl'>1.4k+</h1>
            </div>
            <p className='text-xl text-veryDarkCyan/50'>Communities Formed</p>
          </div>

          <div className='flex items-center flex-col text-center mb-[6rem] md:w-1/3'>
            <div className='w-48 md:w-68'>
              <img src={iconMessages} className='w-8' alt="messages icon" />
              <h1 className='text-7xl md:text-8xl'>2.7m+</h1>
            </div>
            <p className='text-xl text-veryDarkCyan/50'>Messages Sent</p>
          </div>
        </section>


        {
          window.innerWidth >= 375 ?
            <img src={bgSectionTopDesktop1} className='w-full' alt="mobile section curved top background" /> :
            <img src={bgSectionTopMobile1} alt="mobile section curved top background" />
        }


        <section className='bg-veryPaleBlue pt-[7rem] pb-16 md:flex md:justify-center '>
          <div className='px-6 md:flex md:justify-center md:gap-28 md:w-4/5'>
            <div className='md:w-1/3 flex justify-center md:items-center md:order-2'>
              <img className='w-2/6 md:w-full' src={growTogether} alt="grow together" />
            </div>
            <div className='mt-[6rem] md:w-1/2'>
              <h1 className='md:text-left'>Grow Together</h1>
              <p className='md:w-11/12 md:text-left'>Generate meaningful discussions with our audience and build a strong, loyal community. Think of the insighful conversations you miss out on with a feedback form</p>
            </div>
          </div>

        </section>


        {
          window.innerWidth >= 375 ?
            <img src={bgSectionBottomDesktop1} className='w-full' alt="desktop section curved bottom background" /> :
            <img src={bgSectionBottomMobile1} alt="mobile section curved bottom background" />
        }


        <section className=' pt-[7rem] pb-[6rem] md:flex md:justify-center '>
          <div className='px-6 md:flex md:justify-center md:gap-28 md:w-4/5'>
            <div className='md:w-1/3 flex justify-center md:items-center'>
              <img className='w-2/6 md:w-full' src={flowingConversation} alt="flow conversations" />
            </div>
            <div className='mt-[6rem] md:w-1/2'>
              <h1 className='md:text-left'>Flowing Conversations</h1>
              <p className='md:w-11/12 md:text-left'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>

            </div>
          </div>
        </section>


        {
          window.innerWidth >= 375 ?
            <img src={bgSectionTopDesktop2} className='w-full' alt="desktop section curved top background" /> :
            <img src={bgSectionTopMobile2} alt="mobile section curved top background" />
        }

        <section className='bg-veryPaleBlue pt-[7rem] pb-16 md:flex md:justify-center'>
          <div className='px-6 md:flex md:justify-center md:gap-28 md:w-4/5'>
            <div className='md:w-1/3 flex justify-center md:items-center md:order-2' >
              <img className='w-2/6 md:w-full' src={yourUsers} alt="your users" />
            </div>
            <div className='mt-[6rem] md:w-1/2'>
              <h1 className='md:text-left'>Your Users</h1>
              <p className='md:w-11/12 md:text-left'>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>
          </div>
        </section>

        {
          window.innerWidth >= 375 ?
            <img src={bgSectionBottomDesktop2} className='w-full' alt="desktop section curved bottom background" /> :
            <img src={bgSectionBottomMobile2} alt="mobile section curved bottom background" />
        }

        <section className='mt-[7rem] mb-[16rem]'>
          <h1>Ready To Build Your Community?</h1>
          <GetStartedFreeBtn />
        </section>
      </main>

      {
        window.innerWidth >= 375 ?
          <img src={bgFooterTopDesktop} className='w-full' alt="desktop footer curved top background" /> :
          <img src={bgFooterTopMobile} alt="mobile footer curved top background" />
      }


      <footer className='bg-veryDarkCyan pt-[7rem] md:pt-16 md:pb-12 md:flex md:justify-between md:px-[7rem] md:items-center'>

        <div className='text-veryPaleBlue px-6 md:order-1 md:w-2/5'>
          <h1 className='text-veryPaleBlue text-left'>NEWSLETTER</h1>
          <p className='text-veryPaleBlue text-left pt-4 pb-8 md:w-96'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
          <form action="#" className='w-full flex flex-col md:flex-row md:gap-4 items-end'>
            <label htmlFor="newsletter" className='w-full'>
              <input type="text" className='w-full px-2 py-[.8rem] text-veryDarkCyan focus:outline-none rounded-lg' name='newsleeter' id='newsletter' />
            </label>
            <button className='sm:mt-6 sm:items-end w-44 bg-Pink  hover:bg-lightPink hover:cursor-pointer rounded-lg px-12 py-[0.725rem] text-veryPaleBlue font-bold '>Subscribe</button>
          </form>
        </div>

        <div className='px-6 pt-[5rem] pb-8 w-full md:w-80'>
          <SiteLogo className='text-veryPaleBlue' />
          <p className='text-veryPaleBlue text-left py-8 md:text-[1rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultries quis sem.</p>
          <div className='mb-6 w-full'>
            <div className='flex mb-4  items-center'>
              <img className='mr-4' src={iconPhone} alt="phone icon" />
              <span className='text-veryPaleBlue/80'>Phone: +1-543-123-4567</span>
            </div>
            <div className='w-full flex items-center'>
              <img className='mr-4' src={iconEmail} alt="email icon" />
              <span className='text-veryPaleBlue/80'>

                <a href="mailto:https://example@company.com" aria-label='example@company.com'>example@company.com</a>
              </span>
            </div>
          </div>

          <ul className='flex gap-4 pt-6'>
            <li>
              <a href="https://web.facebook.com/paul.ahorsu" aria-label='facebook profile: paul.ahorsu'>
                <FaFacebookSquare className='text-veryPaleBlue hover:text-[#149FF8]' size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/paulscorti" aria-label='instagram profile: paulscorti'>
                <AiFillInstagram className='text-veryPaleBlue hover:text-[#c17aea]' size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/paulscorti/" aria-label='twitter profile: paulscorti'>
                <AiFillTwitterSquare className='text-veryPaleBlue hover:text-[#67d2fc]' size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Home