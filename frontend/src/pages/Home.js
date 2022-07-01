import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Main } from "../layouts/Main";
import { Formik } from "formik";
import { searchSchema } from "../validation/searchUserSchema";

export const Home = () => {
  const navigate = useNavigate();

  const handleClickSearch = (values) =>
    navigate(`/user/${values.username}/repositories`);

  return (
    <Main>
      <Alert>
        <Formik
          validationSchema={searchSchema}
          onSubmit={handleClickSearch}
          initialValues={{ username: "" }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={values.name}
                  onChange={handleChange}
                  className={touched.name && errors.name ? "error" : null}
                />
                {touched.name && errors.name ? (
                  <div className="error-message">{errors.name}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Mostrar repositorios
              </Button>
            </Form>
          )}
        </Formik>
      </Alert>
    </Main>
  );
};
