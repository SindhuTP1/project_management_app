
import { PrismaClient } from '@prisma/client';



// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// neonConfig.poolQueryViaFetch = true

// Type definitions
// declare global {
//   var prisma: PrismaClient | undefined
// }

const prisma = global.prisma || new PrismaClient({ adapter });

export default prisma;