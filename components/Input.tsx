import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const Input = () => {
  return (
    <div className="relative flex flex-1">
      <input
        id="search-field"
        name="search"
        type="search"
        placeholder="Suchen"
        className="block h-full w-full border-0 py-2 px-3 rounded-full bg-[#EEF7F7] text-gray-900 placeholder:text-gray-400 focus:ring-0 text-xs"
      />
      <MagnifyingGlassIcon
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-2 h-full w-4 text-gray-400"
      />
    </div>
  );
};
