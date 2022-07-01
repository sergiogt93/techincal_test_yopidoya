import { useEffect, useState } from "react";
import { Main } from "../layouts/Main";
import { getRepositoriesUserGithub } from "../api/userGithub";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRepositoriesUserGithub(params.user).then((res) =>
      setRepositories(res.data)
    );
  }, []);

  const handleClickUrlOwner = (repositorie) => {
    if (params.user) {
      navigate(`/user/${params.user}/repositories/${repositorie}/owners`);
    }
  };

  return (
    <Main>
      {repositories.length === 0 ? (
        <h2>No hay repostiorios del usuario: </h2>
      ) : (
        <h2>Repositories</h2> &&
        repositories.map((repositorie) => (
          <Card style={{ width: "18rem" }} key={repositorie.id}>
            <Card.Body>
              <Card.Text>{repositorie.name}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleClickUrlOwner(repositorie.name)}
              >
                Ver colaboradores
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Main>
  );
};
