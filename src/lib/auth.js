import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb";

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

    if (!clientId || clientId.length === 0) {
        throw new Error("Missing GOOGLE_CLIENT_ID");
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error("Missing GOOGLE_CLIENT_SECRET");
    }

    return { clientId, clientSecret };
}

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },

    pages: {
        signIn: "/login",
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
            profile(profile) {
                return {
                    id: '[redacted]',
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    mobile: "45454545"
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@gmail.com")
            }
            return true
        },
        async session({ session, token }) {
            session.user.id = token.sub
            return session
        },
        redirect() {
            return "/";
        },
    },
};
