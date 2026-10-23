import { useEffect, useState } from "react";
import RequestForm from "./components/RequestForm.jsx";
import RequestTable from "./components/RequestTable.jsx";
import { getRequests, createRequest, updateRequest, deleteRequest } from "./api.js";

export default function App() {
  const [requests, setRequests] = useState([]);
  const [editing, setEditing] = useState(null); // the request being edited, or null

  // READ
  const loadRequests = async () => setRequests(await getRequests());

  useEffect(() => {
    loadRequests();
  }, []);

  // CREATE or UPDATE
  const saveRequest = async (data) => {
    if (editing) {
      await updateRequest(editing._id, data);
      setEditing(null);
    } else {
      await createRequest(data);
    }
    loadRequests();
  };

  // DELETE
  const removeRequest = async (id) => {
    if (!window.confirm("Delete this request?")) return;
    await deleteRequest(id);
    loadRequests();
  };

  return (
    <div className="container">
      <h1>Blood Requests</h1>

      <RequestForm
        editing={editing}
        onSave={saveRequest}
        onCancel={() => setEditing(null)}
      />

      <RequestTable
        requests={requests}
        onEdit={setEditing}
        onDelete={removeRequest}
      />
    </div>
  );
}
