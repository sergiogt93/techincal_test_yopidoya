import { Main } from "../layouts/Main";
import { useEffect, useState } from "react";
import { getRepositoryCollaboratorGithub } from "../api/userGithub";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuthContext } from "../context/AuthContext";

export const OwnersRepositories = () => {
  const [ownerRepositories, setOwnerRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState({
    status: false,
    error: "",
  });
  const params = useParams();
  const { currentUser } = useAuthContext();

  useEffect(() => {
    getRepositoryCollaboratorGithub(params.user, currentUser)
      .then((res) => {
        setOwnerRepositories(res.data);
        setIsLoading(true);
      })
      .catch((error) =>
        setIsLoading({ status: false, error: "not authoritzed user" })
      );
  }, []);

  return (
    <Main>
      {!isLoading.status && <Alert variant="danger">{isLoading.error}</Alert>}
      {isLoading.status && ownerRepositories.length === 0 && (
        <Alert variant="danger">
          No hay colaboradores en este repositorio del usuario:{" "}
        </Alert>
      )}
      {isLoading && ownerRepositories.length > 0 && <h2>Colaboradores</h2>}
      {isLoading &&
        ownerRepositories.length > 0 &&
        ownerRepositories.map((ownerRepositorie) => (
          <div>
            <p>{ownerRepositorie.login}</p>
            <p>{ownerRepositorie.role_name}</p>
          </div>
        ))}
    </Main>
  );
};
