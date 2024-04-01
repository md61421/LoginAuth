import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://opdtznaqbclnckvremlt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHR6bmFxYmNsbmNrdnJlbWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MDcwMTQsImV4cCI6MjAyNzE4MzAxNH0.nV54fUEjkNY48epGOy4KDoz5iLtZGyiDBoo_I507vSM"
);

const LoginPage = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
      // forward to success URL
      navigate("/success");
    } else {
      // forward to localhost:5173
      navigate("/");
    }
  });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["discord"]}
          />
        </header>
      </div>
    </>
  );
};

export default LoginPage;
