import { Main } from "../layouts/Main";
import { Alert, Form, Button } from "react-bootstrap";
import { useAuthContext } from "../context/AuthContext";
import { Formik } from "formik";
import { loginSchema } from "../validation/loginSchema";

export const Login = () => {
  const { signin } = useAuthContext();

  const initialValuesForm = {
    username: "",
    token: "",
  };

  const handleClickSignin = (values) => signin(values);

  return (
    <Main>
      <Alert variant="primary">
        <Formik
          validationSchema={loginSchema}
          onSubmit={handleClickSignin}
          initialValues={initialValuesForm}
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
              <Form.Group className="mb-3" controlId="formToken">
                <Form.Label>Token</Form.Label>
                <Form.Control
                  type="text"
                  name="token"
                  value={values.token}
                  onChange={handleChange}
                  className={touched.token && errors.token ? "error" : null}
                />
                {touched.name && errors.name ? (
                  <div className="error-message">{errors.name}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Cambiar usuario
              </Button>
            </Form>
          )}
        </Formik>
      </Alert>
    </Main>
  );
};
