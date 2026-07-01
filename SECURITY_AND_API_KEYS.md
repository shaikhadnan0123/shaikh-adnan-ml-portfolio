# API Key Security and Privacy Best Practices

This guide explains how environment variables work in Vite, why front-end API keys are vulnerable, and how to secure them from public access or abuse.

---

## 1. Vite Environment Variables: Public vs. Private

Vite separates environment variables into two categories:
* **Client-Exposed (`VITE_` prefix)**: Any variable starting with `VITE_` (e.g., `VITE_API_KEY`) is embedded into the client-side JavaScript bundle during the build step. **This means anyone visiting your website can read these values by looking at the page source or network tab.**
* **Server-Only (No prefix)**: Variables without the prefix (e.g., `OPENAI_API_KEY`) are only accessible in Node.js/Vite config files (like `vite.config.ts`) and **cannot** be read by the client.

### How to use `.env` files locally
Create a `.env.local` file (which is ignored by Git thanks to our updated `.gitignore`) in your project root:
```env
# Exposed to client (Use ONLY for public keys/identifiers that are safe to share, e.g., EmailJS public key)
VITE_EMAILJS_PUBLIC_KEY="your-public-key"

# Private keys (Keep without VITE_ prefix. Safe from frontend, but inaccessible to React code directly)
DATABASE_PASSWORD="your-secret-db-password"
```

In your React components, you can reference the public variables using:
```typescript
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

---

## 2. Secure Architectures (Preventing Key Theft)

Because all client-side JavaScript is public, **never store private API keys (like OpenAI, AWS, Stripe, GitHub OAuth secrets, or Database credentials) in your React codebase.**

Here are the standard approaches to securing keys:

### Approach A: Use a Backend Proxy (FastAPI / Express)
Since you are a Machine Learning Engineer already utilizing **FastAPI**, this is the recommended solution.
1. Deploy your FastAPI server on a service like Render, Heroku, or Oracle Cloud (OCI).
2. Store your API secrets as environment variables on the cloud provider hosting the FastAPI server.
3. React makes request to your FastAPI backend endpoint:
   `POST /api/generate-summary`
4. FastAPI handles the request, uses the secure server-side API key to communicate with the third-party service, and sends the sanitized data back to the React frontend.
5. **Result**: The API key never leaves your backend server, and the user's browser never sees it.

### Approach B: Use Serverless Functions
If you don't want a standalone backend server, you can use serverless functions:
* **Vercel Functions** / **Netlify Functions**
* These allow you to write API endpoints (e.g. `api/send-email.ts`) that run on the server-side, securing keys in Vercel/Netlify dashboard environment variables.

### Approach C: Use Service Restrictions
For public-facing services that *must* run in the frontend (such as Firebase, Google Maps, or EmailJS):
1. Use only their **Public Keys** / **Client IDs**.
2. Go to the provider's developer dashboard.
3. Configure **Domain Whitelisting / HTTP Referrer Restrictions** so that your key *only* works when called from your portfolio domain (e.g., `https://shaikhadnan.dev`). This prevents other users from copying your key and using it on their own sites.

---

## 3. How to Rotate Compromised Keys

If you have already committed a private API key or password to a public GitHub repository, take these steps immediately:

1. **Deactivate the Key**: Go to the service provider (GitHub, OpenAI, AWS, etc.) and delete/revoke the compromised key immediately.
2. **Generate a New Key**: Issue a new credential and store it in `.env.local` (local development) or your hosting provider's dashboard (production).
3. **Clean Git History**: Simply deleting the key from the code in a new commit *does not* remove it from Git history. Other users can view past commits. Use a tool like **TruffleHog** or **Git-filter-repo** to remove secrets permanently from your commit history:
   ```bash
   git filter-repo --path src/somefile.tsx --invert-paths
   ```
   *(Or contact GitHub support to remove cached views of the commit).*
