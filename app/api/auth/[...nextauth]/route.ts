// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type AuthOptions, type User } from "next-auth"

// Extend the User type to include the role property
declare module "next-auth" {
  interface User {
    role?: string
  }
}
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin_user" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.username || !credentials?.password) {
          console.error("Missing credentials")
          return null // Indicate failure
        }

        const adminUsername = process.env.ADMIN_USERNAME
        const adminPassword = process.env.ADMIN_PASSWORD

        if (!adminUsername || !adminPassword) {
          console.error("Admin credentials are not configured in .env")
          // Throwing an error gives specific feedback to the signIn function
          throw new Error("Server configuration error.")
        }

        // IMPORTANT: Direct string comparison is used here because the requirement
        // was to use the plaintext password from .env.
        // In production, you should HASH passwords and compare hashes.
        if (credentials.username === adminUsername && credentials.password === adminPassword) {
          // Any object returned will be saved in `user` property of the JWT
          console.log("Admin authorization successful for:", credentials.username)
          // Return a user object. The 'id' is often required, 'name' and 'email' are standard.
          // Adapt as needed, email isn't strictly necessary here.
          return {
            id: "admin-user-01", // A static ID for the admin user
            name: credentials.username,
            email: `${credentials.username}@example.com`, // Optional placeholder
            // You can add custom properties like roles here
            role: "admin",
          }
        } else {
          console.warn("Admin authorization failed for:", credentials.username)
          // Return null if user data could not be retrieved or credentials invalid
          // Throwing an error gives specific feedback
          throw new Error("Invalid username or password")
        }
      },
    }),
    // ...add more providers here if needed
  ],
  // Use JWT strategy for sessions
  session: {
    strategy: "jwt",
    // Set session expiry to 1 hour (in seconds)
    maxAge: 60 * 60, // 1 hour
  },
  // Custom pages
  pages: {
    signIn: "/admin/login", // Redirect users to this page if they need to sign in
    error: "/admin/login", // Redirect users to login page on error (optional)
    // signOut: '/auth/signout', // You can specify a custom signout page
    // verifyRequest: '/auth/verify-request', // (used for email sign in)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // Secret for signing JWTs
  secret: process.env.NEXTAUTH_SECRET,

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  callbacks: {
    // Use the JWT callback to add custom properties (like role) to the JWT token
    async jwt({ token, user }) {
      // Persist the user role to the token right after signin
      if (user?.role) {
        token.role = user.role
      }
      return token
    },
    // Use the session callback to add custom properties to the session object
    // available on the client via `useSession` or `getSession`
    async session({ session, token }) {
      if (token?.role && session.user) {
        // Explicitly type session.user if needed, or use type assertion
        ;(session.user as any).role = token.role
      }
       // Ensure the session expires based on the token's expiration
      if (token.exp) {
        session.expires = new Date((token.exp as number) * 1000).toISOString()
      }
      return session
    },
  },
  // Enable debug messages in development
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }