import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { IUserRole, UserModel } from "./mongodb/models/userModel";
import { connectDB } from "./mongodb/connect";

export const {
    auth,
    handlers: { GET, POST },
    signIn,
    signOut,
} = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                await connectDB();

                const user = await UserModel.findOne({ email: credentials.email }).lean();

                if (!user || user.is_blocked) return null;

                const isValid = await bcrypt.compare(credentials.password as string, user.password);
                if (!isValid) return null;

                return {
                    id: user._id!.toString(),
                    email: user.email,
                    name: user.name,
                    role: user.role || "user",
                };
            },
        }),
    ],
    trustHost: true, //!Дает заходить не только c HTTPS

    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.email = token.email!;
                session.user.name = token.name!;
                session.user.role = token.role as IUserRole;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
});
