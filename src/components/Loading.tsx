export default function Loading() {
  return (
    <div className="w-full flex justify-center py-4" role="status" aria-label="Loading">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
