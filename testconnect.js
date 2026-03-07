import mongoose from 'mongoose';

const uri = process.env.MONGO_URI || 'mongodb+srv://nkumboatenge_db_user:yein99rLtFaFYPS2@backenddb.vxd0j96.mongodb.net/?appName=BackendDb';

(async () => {
  try {
    await mongoose.connect(uri);
    console.log('connected');
  } catch (e) {
    console.error('connect error', e.message);
    process.exit(1);
  }
  process.exit(0);
})();