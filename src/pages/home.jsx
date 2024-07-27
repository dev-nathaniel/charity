import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Header />
      <div className='flex flex-col gap-6 justify-center items-center md:max-w-3xl my-8 mx-auto text-center px-2 min-[425px]:px-5'>
        <h1 className='text-[calc(1.35rem_+_1.2vw)]'>ABOUT US</h1>
        <p className='text-lg sm:text-center text-left'>Dunni's Feeds is an initiative that aims to feed a child a day as an incentive to encourage young people
          to go to school. Education is the bedrock of our society and a stepping stone to a brighter future. In encouraging young children to go to
          school, they gain life skills useful for the rest of their lives regardless of the path they take after their primary education.
          It is crucial that every young child is given the opportunity to acquire this knowledge and skill.
        </p>
        <p className='text-lg sm:text-center text-left'>This initiative works by feeding young children in primary eductaion every week until the end of their academic year to incentivise them to come to school.</p>
        <div className='border-solid border-black border-2 rounded-full px-2 min-[425px]:px-4 py-4 min-[425px]:text-xl mt-4 cursor-pointer'>
          <p>Join Us To Encourage Young Children</p>
        </div>
      </div>
      <div className='flex flex-col gap-8 mt-24 w-11/12 mx-auto'>
        <div className='text-center'>
          <p className='text-[calc(1.35rem_+_1.2vw)]'>Progress Check</p>
        </div>
        <div className='flex gap-10 flex-wrap md:justify-between items-center text-center'>
          <div className='md:flex-1 max-md:px-[15%] flex flex-col gap-4'>
            <p className='text-[2.5rem] font-bold'>2,000</p>
            <p className='font-medium text-[#787878]'>young children were fed by May 2024, receiving the nutrition needed for healthy growth and learning.</p>
          </div>
          <div className='md:flex-1 flex max-md:px-[15%] flex-col gap-4'>
            <p className='text-[2.5rem] font-bold'>20.5%</p>
            <p className='font-medium text-[#787878]'>increase in enrolment was recorded in one school, highlighting the impact on student attendance.</p>
          </div>
          <div className='md:flex-1 flex max-md:px-[15%] flex-col gap-4'>
            <p className='text-[2.5rem] font-bold'>22%</p>
            <p className='font-medium text-[#787878]'>increase in attendance was recorded in another school, reflecting our program's positive impact.</p>
          </div>
        </div>
      </div>
      <div className='grid max-[550px]:grid-cols-1 grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8 mb-14 mt-28 w-11/12 mx-auto'>
        <Card image={'/imagefld/image.jpg'} text={'Supporting us incentivizes young children to attend school, fostering a love for learning and ensuring they receive essential education.'} />
        <Card image={'/imagefld/image2.jpg'} text={'With your help, we can provide daily meals that promote better health and growth, giving children a brighter future.'} />
        <Card image={'/imagefld/image3.jpg'} text={'Donating to our cause means fewer children will go to bed hungry, improving their overall well-being and school attendance.'} />
        <Card image={'/imagefld/image4.jpg'} text={'By joining our cause, you make it possible for children to receive the nutrition they need to succeed in school and beyond.'} />
        <Card image={'/imagefld/image5.jpg'} text={'Together, we can eliminate hunger in schools, allowing children to thrive academically and socially.'} />
        <Card image={'/imagefld/image6.jpg'} text={'Support us to ensure that no child has to worry about their next meal, so they can focus on their studies and dreams.'} />
      </div>
      <iframe class="gfm-embed-iframe" width="100%" height="540" frameborder="0" scrolling="no" src="https://www.gofundme.com/f/feed-a-child-a-day/widget/large?sharesheet=CAMPAIGN_PAGE&amp;attribution_id=undefined&amp;utm_content=localhost&amp;utm_medium=referral&amp;utm_source=widget#:~:tcm-regime=GDPR&amp;tcm-prompt=Hidden"></iframe>
      <div className="gfm-embed" data-url="https://www.gofundme.com/f/feed-a-child-a-day/widget/large?sharesheet=CAMPAIGN_PAGE&attribution_id=undefined"></div>
      <Footer />
    </div>
  )
}

export default Home
