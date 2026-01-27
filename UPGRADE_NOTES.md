# Upgrade Notes: Next.js 15 & React 19

## Changes Made

### Package Updates
- **Next.js**: Upgraded from 14.2.0 → 15.1.0
- **React**: Upgraded from 18.3.0 → 19.0.0
- **React DOM**: Upgraded from 18.3.0 → 19.0.0
- **ESLint Config Next**: Upgraded from 14.2.0 → 15.1.0
- **TypeScript**: Upgraded to 5.7.0
- **All other dependencies**: Updated to latest compatible versions

### Removed Dependencies
- Removed `express-rate-limit` (using custom rate limiting implementation)
- Removed `next-rate-limit` (not needed)

### Configuration Updates
- Updated `next.config.js` to remove deprecated `images.domains` (using `remotePatterns` only)
- Updated ESLint config to include TypeScript support

## Breaking Changes to Be Aware Of

### React 19 Changes
1. **Refs**: React 19 changes how refs work. If you use `forwardRef`, ensure compatibility.
2. **Form Actions**: React 19 has built-in form actions support.
3. **Async Components**: React 19 supports async Server Components natively.

### Next.js 15 Changes
1. **Caching**: Default caching behavior has changed. Use `cache: 'no-store'` for dynamic data.
2. **Cookies**: Cookie handling has been updated.
3. **Middleware**: Middleware API remains the same but may have subtle changes.

### Clerk Compatibility
- Clerk 5.0.0 is compatible with Next.js 15 and React 19
- No changes needed to Clerk integration

## Installation

After updating package.json, run:

```bash
# Remove old node_modules and lock file
rm -rf node_modules package-lock.json

# Install fresh dependencies
npm install

# If you encounter peer dependency warnings, you may need to use --legacy-peer-deps
npm install --legacy-peer-deps
```

## Testing Checklist

After installation, test:
- [ ] Home page loads correctly
- [ ] Authentication (sign in/up) works
- [ ] Product pages load
- [ ] Cart functionality
- [ ] API routes respond correctly
- [ ] Build completes successfully: `npm run build`

## Known Issues & Solutions

### If you see React version conflicts:
```bash
npm install --legacy-peer-deps
```

### If ESLint shows errors:
The new ESLint config should resolve most issues. If you see TypeScript errors, ensure your `tsconfig.json` is properly configured.

### If build fails:
1. Clear `.next` folder: `rm -rf .next`
2. Clear cache: `npm cache clean --force`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

## Security Improvements

This upgrade addresses:
- ✅ Glob vulnerability (fixed in updated dependencies)
- ✅ rimraf warnings (resolved)
- ✅ inflight warnings (resolved)
- ✅ ESLint warnings (updated to latest version)
