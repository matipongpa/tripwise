import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import SamplePlan from '@/components/SamplePlan'
import InputForm from '@/components/InputForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <SamplePlan />
        <InputForm />
      </main>
      <Footer />
    </>
  )
}
