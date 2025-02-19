class Stake {
    constructor() {
    }
  
    removeSponsoredBanner() {
      const banner = document.querySelector('.ant-alert-success');
      if (banner) {
        banner.remove();
      }
  
      const sponsorshipDiv = document.querySelector('.flex.justify-center.items-center.flex-col.text-xs');
      if (sponsorshipDiv) {
          sponsorshipDiv.remove();
      }
  
      const floatingCloseBtn = document.querySelector('.floating-close-btn');
      if (floatingCloseBtn) {
          floatingCloseBtn.remove();
      }
  
      const dividers = document.querySelectorAll('.ant-divider.ant-divider-horizontal');
      dividers.forEach(divider => {
          if (divider.innerText.trim() === "Contact") {
              divider.remove();
          }
      });
  
      const followButton = document.querySelector('.ant-btn.ant-btn-primary[style*="background-color: rgb(20, 23, 26)"]');
      if (followButton) {
          followButton.remove();
      }
  
      const discordButton = document.querySelector('.ant-btn.ant-btn-primary[style*="background-color: rgb(88, 101, 242)"]');
      if (discordButton) {
          discordButton.remove();
      }
  
      const reportButton = document.querySelector('.ant-btn.ant-btn-primary[style*="background-color: rgb(64, 150, 255)"]');
      if (reportButton) {
          reportButton.remove();
      }
    }
  
    hook() {
      this.removeSponsoredBanner();
  
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes.length) {
            this.removeSponsoredBanner();
          }
        });
      });
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  }
  
  const stake = new Stake();
  stake.hook();
  