import useGithubProjects from "../hooks/useGithubProjects";

function ProjectsPreview() {
  const { projects, loading } = useGithubProjects("sajwanmohit");

  if (loading) return <p>Loading projects...</p>;

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((repo: any) => (
          <div
            key={repo.id}
            className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>

            <p className="text-gray-400 mb-4">{repo.description}</p>

            <a href={repo.html_url} target="_blank" className="text-blue-400">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPreview;
