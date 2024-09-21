import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
console.log('NextAuth Initialized');

// Handler for GET method
export const GET = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
});

// Handler for POST method
export const POST = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
});
