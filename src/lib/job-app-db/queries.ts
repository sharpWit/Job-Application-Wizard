import { db } from '@/lib/db'
import type { JobApplicationSchema } from '@/lib/job-app-db/schemas'

export const jobApplicationQueries = {
  async getJobById(id: number): Promise<JobApplicationSchema | undefined> {
    const job = await db.jobApplication.where('id').equals(id).first()

    return job
  },

  async createJob(
    data: Omit<JobApplicationSchema, 'id' | 'createdAt' | 'updatedAt' | 'table'>
  ): Promise<void> {
    await db.jobApplication.add({ ...data, createdAt: new Date() })
  },

  async updateJob(
    id: number,
    data: Partial<Omit<JobApplicationSchema, 'updatedAt'>>
  ): Promise<void> {
    await db.jobApplication.update(id, { ...data, updatedAt: new Date() })
  },

  async deleteJob(id: number): Promise<void> {
    await db.jobApplication.delete(id)
  },
}

// ! Do it later for other tables
