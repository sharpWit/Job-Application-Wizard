import {
  AttachmentSchema,
  EducationSchema,
  ExperienceSchema,
  JobApplicationSchema,
  PersonalInfoSchema,
  ProgressSchema,
  SkillSchema,
} from '@/lib/job-app-db/schemas'
import Dexie, { type EntityTable } from 'dexie'

export default class JobAppDB extends Dexie {
  jobApplication!: EntityTable<JobApplicationSchema, 'id'>
  personalInfo!: EntityTable<PersonalInfoSchema, 'id'>
  experience!: EntityTable<ExperienceSchema, 'id'>
  education!: EntityTable<EducationSchema, 'id'>
  skills!: EntityTable<SkillSchema, 'id'>
  attachments!: EntityTable<AttachmentSchema, 'id'>
  progress!: EntityTable<ProgressSchema, 'id'>

  constructor() {
    super('JobApplicationDB')
    this.version(1).stores({
      jobApplication: '++id, jobTitle, companyName, createdAt, updatedAt, status',
      personalInfo: '++id, applicationId, fullName, email, *phone, address, portfolio',
      experience: '++id, applicationId, company, position, startDate, endDate, description',
      education: '++id, applicationId, school, degree, fieldOfStudy, startYear, endYear',
      skills: '++id, applicationId, name, level',
      attachments: '++id, applicationId, name, type, file',
      progress: '++id, applicationId, currentStep, completedSteps',
    })
    this.jobApplication.mapToClass(JobApplicationSchema)
    this.personalInfo.mapToClass(PersonalInfoSchema)
    this.experience.mapToClass(ExperienceSchema)
    this.education.mapToClass(EducationSchema)
    this.skills.mapToClass(SkillSchema)
    this.attachments.mapToClass(AttachmentSchema)
    this.progress.mapToClass(ProgressSchema)
  }
}
