import { useEffect, useState } from "react";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const STATUSES = ["DRAFT", "PUBLISHED", "FULFILLED", "CANCELLED"];

const emptyForm = {
  bloodTypeNeeded: "",
  city: "",
  hospital: "",
  reason: "",
  status: "DRAFT",
};

export default function RequestForm({ editing, onSave, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  // When "Edit" is clicked, fill the form. When it ends, clear the form.
  useEffect(() => {
    setForm(editing ? editing : emptyForm);
  }, [editing]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { bloodTypeNeeded, city, hospital, reason, status } = form;
    await onSave({ bloodTypeNeeded, city, hospital, reason, status });
    setForm(emptyForm);
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editing ? "Edit request" : "New request"}</h2>

      <label>
        Blood type needed
        <select name="bloodTypeNeeded" value={form.bloodTypeNeeded} onChange={handleChange} required>
          <option value="">Select...</option>
          {BLOOD_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label>
        Status
        <select name="status" value={form.status} onChange={handleChange}>
          {STATUSES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <label>
        City
        <input name="city" value={form.city} onChange={handleChange} required />
      </label>

      <label>
        Hospital
        <input name="hospital" value={form.hospital} onChange={handleChange} required />
      </label>

      <label className="full">
        Reason
        <textarea name="reason" rows="2" value={form.reason} onChange={handleChange} required />
      </label>

      <div className="full buttons">
        <button type="submit" className="primary">
          {editing ? "Update request" : "Save request"}
        </button>
        {editing && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
