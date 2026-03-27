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
    <section className="section text-center max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-gray-300 leading-relaxed">
        {data?.about}
      </p>

    </section>
  )
}

export default About