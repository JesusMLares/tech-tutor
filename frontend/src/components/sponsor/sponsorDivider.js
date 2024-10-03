import React from 'react';
import './sponsorDivider.css';

const SponsorDivider = () => {
  return (
    <div className="sponsor-divider-sd">
      <div className="sponsor-logos-sd">
        <img src="./img/spon-stripe-logo.png" alt="Sponsor 1" />
        <img src="/img/spon-fiverr-logo.png" alt="Sponsor 2" />
        <img id="microsoft-logo" src="/img/spon-microsoft-logo.png" alt="Sponsor 3" />
        <img src="/img/spon-amex-logo.png" alt="Sponsor 4" />
        <img id="apple-logo" src="/img/spon-apple-logo.png" alt="Sponsor 5" />
        <img id="chase-logo" src="/img/spon-chase-logo.png" alt="Sponsor 6" />
        <img id="unlv-logo" src="/img/spon-unlv-g-logo.png" alt="Sponsor 7" />
        <img id="thrivedx-logo"  src="/img/spon-thrivedx-gg-logo.png" alt="Sponsor 8" />
      </div>
    </div>
  );
};

export default SponsorDivider;