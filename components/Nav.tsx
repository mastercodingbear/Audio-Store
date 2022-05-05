import React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <ul className="flex pl-5 text-lg">
      <li className="p-2 hover:text-slate-400">
        <Link href="/">Home</Link>
      </li>
      <li className="p-2 hover:text-slate-400">
        <Link href="/upload">Upload</Link>
      </li>
    </ul>
  );
};

export default Nav;
