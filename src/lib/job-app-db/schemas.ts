import type JobAppDB from '@/lib/job-app-db/job-app-db'
import { Entity } from 'dexie'

export class JobApplicationSchema extends Entity<JobAppDB> {
  id!: number
  jobTitle!: string
  companyName!: string
  createdAt!: Date
  updatedAt?: Date
  status!: 'draft' | 'submitted'
}

export class PersonalInfoSchema extends Entity<JobAppDB> {
  id!: string
  applicationId!: number
  fullName!: string
  email!: string
  phone!: string
  address?: string
  portfolio?: string
}

export class ExperienceSchema extends Entity<JobAppDB> {
  id!: string
  applicationId!: number
  company!: string
  position!: string
  startDate!: string
  endDate?: string
  description?: string
}

export class EducationSchema extends Entity<JobAppDB> {
  id!: number
  applicationId!: number
  school!: string
  degree!: string
  fieldOfStudy!: string
  startYear!: number
  endYear?: number
}

export class SkillSchema extends Entity<JobAppDB> {
  id!: number
  applicationId!: number
  name!: string
  level!: 'beginner' | 'intermediate' | 'advanced'
}

export class AttachmentSchema extends Entity<JobAppDB> {
  id!: number
  applicationId!: number
  name!: string
  type!: 'resume' | 'coverLetter' | 'other'
  file!: Blob
}

export class ProgressSchema extends Entity<JobAppDB> {
  id!: string
  applicationId!: number
  currentStep!: number
  completedSteps!: number[]
}
