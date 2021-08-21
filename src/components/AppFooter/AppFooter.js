import React from "react";

import "./AppFooter.css";

function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer__title">
        Roman Kovalenko &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default AppFooter;
