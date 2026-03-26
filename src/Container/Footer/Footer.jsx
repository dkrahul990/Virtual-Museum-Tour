import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Virtual Museum Tour</h3>
            <p>Experience art and culture from around the world.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@virtualMesuem.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Virtual Museum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default footer
