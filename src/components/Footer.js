export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-700 mt-8 border-t">
      <div className="flex justify-center items-center gap-3 mb-2">
        <img
          src="https://ui-avatars.com/api/?name=Duong+Anh+Duc&background=random"
          alt="Avatar Duong Anh Duc"
          className="w-8 h-8 rounded-full border"
        />
        <div className="text-base font-semibold">
          Duong Anh Duc{" "}
          <span className="text-xs text-indigo-500">(OMI.BU2)</span>
        </div>
      </div>
      <div className="mt-1 text-gray-500">
        &copy; {new Date().getFullYear()} - All rights reserved.
      </div>
    </footer>
  );
}
