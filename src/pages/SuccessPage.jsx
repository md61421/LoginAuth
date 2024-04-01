import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://opdtznaqbclnckvremlt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHR6bmFxYmNsbmNrdnJlbWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MDcwMTQsImV4cCI6MjAyNzE4MzAxNH0.nV54fUEjkNY48epGOy4KDoz5iLtZGyiDBoo_I507vSM"
);

const SuccessPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          {Object.keys(user).length !== 0 ? (
            <>
              <h1>Success</h1>
              <button onClick={() => signOutUser()}>Sign Out</button>
            </>
          ) : (
            <>
              <h1>User is not logged in</h1>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back
              </button>
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default SuccessPage;
