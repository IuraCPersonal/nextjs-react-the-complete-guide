import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: router.query.id,
        clientprojectid: 'project_a'
      }
    });
  };

  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
