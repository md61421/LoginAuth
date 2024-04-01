import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import { useNavigate } from "react-router-dom";

// Load environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Create Supabase client using environment variables
const supabase = createClient(supabaseUrl, supabaseKey);

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
