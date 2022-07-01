import axios from "axios";

export async function getRepositoriesUserGithub(user) {
  return axios.get(`https://api.github.com/users/${user}/repos`);
}

export async function getRepositoryCollaboratorGithub(user, token) {
  return axios.get(
    `https://api.github.com/repos/${user}/filesystem-explorer/collaborators`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
}
