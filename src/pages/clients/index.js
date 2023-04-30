import Link from "next/link";

const ClientsPage = () => {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          <Link href="/clients/simpi">simpi</Link>
        </li>
        <li>
          <Link href="/clients/uwu">Zero</Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientsPage;
