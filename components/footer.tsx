import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-16 border-t">
      <div className="flex items-center justify-center space-x-2">
        <p className="text-[#121212] dark:text-white">© 2024</p>
        <Link
          href="https://github.com/adekpp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Adrian Pietryga
        </Link>
      </div>
    </footer>
  );
};
