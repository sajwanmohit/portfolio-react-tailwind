type SkillCardProps = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
};

function SkillCard({ name, level }: SkillCardProps) {
  return (
    <div
      className="
      p-5 rounded-lg
      border border-gray-200 dark:border-gray-800
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
      shadow-sm
      hover:shadow-md
      transition"
    >
      <h3 className="text-lg font-semibold">{name}</h3>

      {level && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{level}</p>
      )}
    </div>
  );
}

export default SkillCard;
