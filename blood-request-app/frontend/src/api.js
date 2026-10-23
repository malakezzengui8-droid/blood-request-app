// All calls to the backend live here.
const URL = "/api/blood-requests";

const headers = { "Content-Type": "application/json" };

export const getRequests = () => fetch(URL).then((r) => r.json());

export const createRequest = (data) =>
  fetch(URL, { method: "POST", headers, body: JSON.stringify(data) });

export const updateRequest = (id, data) =>
  fetch(`${URL}/${id}`, { method: "PUT", headers, body: JSON.stringify(data) });

export const deleteRequest = (id) => fetch(`${URL}/${id}`, { method: "DELETE" });
