import { useRouter } from "next/router";

const PortofolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Portofolio Project Page</h1>
    </div>
  );
};

export default PortofolioProjectPage;
