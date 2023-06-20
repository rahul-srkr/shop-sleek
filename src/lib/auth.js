import GoogleProvider from "next-auth/providers/google";
import User from "@/model/User";
import connect from "./dbConn";

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
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            try {
                await connect()
                const isUserAlreadyExist = await User.findOne({ email: token.email })
                if (!isUserAlreadyExist) {
                    const newUser = await new User({
                        name: token.name,
                        email: token.email,
                        image: token.picture,
                    })

                    const error = newUser.validateSync();
                    const user = await newUser.save()

                    token.id = user._id
                    token.name = user.name
                    token.email = user.email
                    token.image = user.image
                    token.role = user.role
                    token.mobile = user.mobile
                    token.addresses = user.addresses
                    token.gender = user.gender
                    token.location = user.location
                    token.seller = user.seller || null
                    return token
                }
                token.id = isUserAlreadyExist._id
                token.name = isUserAlreadyExist.name
                token.email = isUserAlreadyExist.email
                token.image = isUserAlreadyExist.image
                token.role = isUserAlreadyExist.role
                token.mobile = isUserAlreadyExist.mobile
                token.addresses = isUserAlreadyExist.addresses
                token.gender = isUserAlreadyExist.gender
                token.location = isUserAlreadyExist.location
                token.seller = isUserAlreadyExist.seller || null
                return token


            } catch (e) {
                console.error(e);
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.mobile = token.mobile;
                session.user.image = token.image;
                session.user.addresses = token.addresses;
                session.user.role = token.role;
                session.user.gender = token.gender;
                session.user.location = token.location;
                session.user.seller = token.seller;
            }

            return session;
        },
        redirect() {
            return "/";
        },
    },
};
