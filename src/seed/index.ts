import seedMedia from './seed-media'
import { seedProduct } from './seed-product'

async function run() {
  try {
    await seedMedia()
    // await seedProduct()
  } catch (error) {
    console.error(JSON.stringify(error))
    process.exit(1)
  }

  process.exit(0)
}

await run()
