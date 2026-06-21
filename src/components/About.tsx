import { useSiteSettings } from "../hooks/useSiteSettings"

function About() {

  const { data, isLoading } = useSiteSettings()

  if (isLoading) {
    return (
      <section className="section text-center">
        Loading...
      </section>
    )
  }

  return (
    <section className="section text-center max-w-2xl sm:max-w-3xl mx-auto px-4">

      <h2 className="glitch-hover text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        {data?.about}
      </p>

    </section>
  )
}

export default About