import { User } from "@supabase/supabase-js";

// todo: make it readonly
export const MOCK_USER: User = {
  id: "439c5069-9272-4cd3-a3f1-a8801d288322",
  aud: "authenticated",
  role: "authenticated",
  email: "clement.vannouque@gmail.com",
  email_confirmed_at: "2025-04-24T21:04:24.475459Z",
  phone: "",
  confirmed_at: "2025-04-24T21:04:24.475459Z",
  last_sign_in_at: "2025-05-05T21:00:02.152231Z",
  app_metadata: { provider: "email", providers: ["email"] },
  user_metadata: {
    email: "clement.vannouque@gmail.com",
    email_verified: true,
    phone_verified: false,
    sub: "439c5069-9272-4cd3-a3f1-a8801d288322",
  },
  identities: [
    {
      identity_id: "dbbcf1a6-5c11-4393-be66-1681286658e2",
      id: "439c5069-9272-4cd3-a3f1-a8801d288322",
      user_id: "439c5069-9272-4cd3-a3f1-a8801d288322",
      identity_data: {
        email: "clement.vannouque@gmail.com",
        email_verified: false,
        phone_verified: false,
        sub: "439c5069-9272-4cd3-a3f1-a8801d288322",
      },
      provider: "email",
      last_sign_in_at: "2025-04-24T21:04:24.471456Z",
      created_at: "2025-04-24T21:04:24.471478Z",
      updated_at: "2025-04-24T21:04:24.471478Z",
    },
  ],
  created_at: "2025-04-24T21:04:24.465411Z",
  updated_at: "2025-05-05T21:00:02.154256Z",
  is_anonymous: false,
};
