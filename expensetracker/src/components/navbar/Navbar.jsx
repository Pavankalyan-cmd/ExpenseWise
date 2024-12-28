import "../navbar/Nav.css";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { user } = useUser();
  return (
    <div className="container-fluid dashnav">
      <div>
        <p id="logotxt">ExpenseWise</p>
      </div>
      <div className="navitem">
        <UserButton />
      </div>
    </div>
  );
}
