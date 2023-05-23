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
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    phoneNumber: {
                        type: Number,
                    },
                    addresses: [
                        {
                            country: {
                                type: String,
                            },
                            city: {
                                type: String,
                            },
                            address1: {
                                type: String,
                            },
                            address2: {
                                type: String,
                            },
                            zipCode: {
                                type: Number,
                            },
                            addressType: {
                                type: String,
                            },
                        }
                    ],
                    role: {
                        type: String,
                        default: "user",
                    },
                    avatar: {
                        type: String,
                        required: true,
                    },
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }

            return session;
        },
        redirect() {
            return "/";
        },
    },
};
