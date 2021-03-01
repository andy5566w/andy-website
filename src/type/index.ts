export type SkillState = {
  skills: Array<SkillType>
}

export type SkillType = {
  img_path: string
  title: string
  content: string
}

export type ExperienceState = {
  experiences: Array<ExperienceType>
}

export type ExperienceType = {
  icon_path: string
  title: string
  content: Array<string>
}
