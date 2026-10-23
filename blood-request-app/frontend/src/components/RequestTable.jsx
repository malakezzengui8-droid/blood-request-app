export default function RequestTable({ requests, onEdit, onDelete }) {
  return (
    <div className="card">
      <h2>All requests</h2>

      {requests.length === 0 ? (
        <p className="empty">No requests yet. Add one above.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Blood</th>
                <th>City</th>
                <th>Hospital</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r._id}>
                  <td><strong>{r.bloodTypeNeeded}</strong></td>
                  <td>{r.city}</td>
                  <td>{r.hospital}</td>
                  <td>{r.reason}</td>
                  <td>{r.status}</td>
                  <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td className="buttons">
                    <button onClick={() => onEdit(r)}>Edit</button>
                    <button className="danger" onClick={() => onDelete(r._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
