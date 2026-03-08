import { useState } from "react"

type SkillCardProps = {
  skill: string
  level: string
}

function SkillCard({ skill, level }: SkillCardProps) {
  const [showLevel, setShowLevel] = useState(false)

  return (
    <div>
      <h3>{skill}</h3>

      <button onClick={() => setShowLevel(!showLevel)}>
        {showLevel ? "Hide Level" : "Show Level"}
      </button>

      {showLevel && <p>{level}</p>}
    </div>
  )
}

export default SkillCard