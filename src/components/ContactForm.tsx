"use client";

import { useState } from "react";
import { Alert, Button, MenuItem, TextField } from "@mui/material";
import { submitContact, submitEnquiry } from "@/services/api";

type FormMode = "enquiry" | "contact";

type ContactFormProps = {
  mode?: FormMode;
};

const roomTypes = ["Single", "Double Sharing", "Triple Sharing"];

export default function ContactForm({ mode = "enquiry" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    moveInDate: "",
    roomType: "",
    message: ""
  });

  const onChange = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      if (mode === "enquiry") {
        await submitEnquiry({
          name: form.name,
          email: form.email,
          phone: form.phone,
          moveInDate: form.moveInDate,
          roomType: form.roomType,
          message: form.message
        });
      } else {
        await submitContact({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message
        });
      }

      setStatus({ type: "success", message: "Submitted successfully. We will contact you soon." });
      setForm({ name: "", email: "", phone: "", moveInDate: "", roomType: "", message: "" });
    } catch (_error) {
      setStatus({ type: "error", message: "Submission failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl2 bg-white p-6 shadow-card">
      <h3 className="text-xl font-semibold text-slateInk">
        {mode === "enquiry" ? "Check Room Availability" : "Send a Message"}
      </h3>

      {status ? <Alert severity={status.type}>{status.message}</Alert> : null}

      <TextField
        fullWidth
        label="Name"
        value={form.name}
        onChange={(e) => onChange("name", e.target.value)}
        required
      />
      <TextField
        fullWidth
        type="email"
        label="Email"
        value={form.email}
        onChange={(e) => onChange("email", e.target.value)}
        required={mode === "contact"}
      />
      <TextField
        fullWidth
        label="Phone"
        value={form.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        required={mode === "enquiry"}
      />

      {mode === "enquiry" ? (
        <>
          <TextField
            fullWidth
            type="date"
            label="Move-in Date"
            value={form.moveInDate}
            onChange={(e) => onChange("moveInDate", e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            select
            label="Room Type"
            value={form.roomType}
            onChange={(e) => onChange("roomType", e.target.value)}
          >
            {roomTypes.map((roomType) => (
              <MenuItem key={roomType} value={roomType}>
                {roomType}
              </MenuItem>
            ))}
          </TextField>
        </>
      ) : null}

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Message"
        value={form.message}
        onChange={(e) => onChange("message", e.target.value)}
        required
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{ backgroundColor: "#0B3C6D", textTransform: "none", py: 1.2, borderRadius: "10px" }}
      >
        {loading ? "Submitting..." : mode === "enquiry" ? "Submit Enquiry" : "Send Message"}
      </Button>
    </form>
  );
}
