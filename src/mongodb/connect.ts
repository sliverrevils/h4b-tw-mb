import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/h4b";

export const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(MONGODB_URI);
};

// declare global {
//     var mongoose: {
//         conn: typeof import("mongoose") | null;
//         promise: Promise<typeof import("mongoose")> | null;
//     };
// }

// globalThis.mongoose ??= { conn: null, promise: null };

// export async function connectDB(): Promise<typeof mongoose> {
//     const globalMongoose = globalThis.mongoose;

//     if (globalMongoose.conn) return globalMongoose.conn;

//     if (!globalMongoose.promise) {
//         globalMongoose.promise = mongoose.connect(MONGODB_URI, {
//             bufferCommands: false,
//         });
//     }

//     globalMongoose.conn = await globalMongoose.promise;
//     return globalMongoose.conn;
// }
