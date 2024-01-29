import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HeroSection from './components/heroSection'
import AchievementsSection from './components/AchievementsSection'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='flex min-h-screen flex-col bg-[#121212]'>
      <HeroSection page = {page} />
      <AchievementsSection page = {page} />
    </section>
  )
}
