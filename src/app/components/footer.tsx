import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>© 2024 빛축제. All rights reserved.</p>
        <p className="mt-2">
          문의: info@lightsaurfestival.com | 전화: 123-456-7890
        </p>
        <div className="mt-4 space-x-4">
          <Link href="#" className="text-primary hover:underline">Facebook</Link>
          <Link href="#" className="text-primary hover:underline">Instagram</Link>
          <Link href="#" className="text-primary hover:underline">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}