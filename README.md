
Each child is built and deployed independently but integrated into the parent at runtime.

---

## ⚙️ Tech Stack

- React 18+
- React Router DOM v6
- Webpack Module Federation (or similar)
- Microfrontend architecture (MFE)
- JavaScript / TypeScript

---

## 🔀 Routing Strategy

The parent app defines routes and dynamically loads micro frontends:

```jsx

<React.Suspense fallback="Loading">
      <Routes>
        <Route path="/remote/*" element={<RemoteRootApp parentData={"hello from Parent"}/>} />
      </Routes>
    </React.Suspense>

