/** @type {import('next').NextConfig} */
const nextConfig = {
  // Scope workspace tracing to this site; the user profile also has an unrelated lockfile.
  outputFileTracingRoot: __dirname,
  // No ESLint configuration/dependency is part of this project; lint separately if added.
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
