/**
 * EWEM Academic Portfolio — Interactive Client Logic
 * Provides: 3D Depth Card Tilt, Stage Tabs, Live Real-time Search, Guide Modal, Scroll-To-Top
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive 3D Depth Card Tilt
  const depthCard = document.getElementById('depthCard');
  if (depthCard) {
    depthCard.addEventListener('mousemove', (e) => {
      const rect = depthCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = x * 12; // degrees
      const rotateX = -y * 12; // degrees

      depthCard.style.transform = `perspective(900px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-4px)`;
    });

    depthCard.addEventListener('mouseleave', () => {
      depthCard.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    });
  }

  // 2. Assessment Stage Tab Switcher
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  const validTabs = ['mse', 'ese', 'assignments', 'casestudies', 'tools'];

  function switchTab(targetId) {
    if (!validTabs.includes(targetId)) targetId = 'mse';

    // Update active tab button
    tabs.forEach(tab => {
      const isTarget = tab.dataset.tab === targetId;
      tab.classList.toggle('active', isTarget);
      tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    // Update active panel
    panels.forEach(panel => {
      const isTarget = panel.id === targetId;
      panel.classList.toggle('active', isTarget);
    });

    // Re-apply search filter if there is an active query
    applySearch();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;
      switchTab(targetId);
      // Update hash without jumping
      history.replaceState(null, null, `#${targetId}`);
    });
  });

  // URL Hash Sync for direct linking (e.g. #ese or #mse)
  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (validTabs.includes(hash)) {
      switchTab(hash);
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();

  // 3. Live Search & Filter Bar
  const searchInput = document.getElementById('archiveSearch');
  const clearSearchBtn = document.getElementById('clearSearch');
  const itemCount = document.getElementById('itemCount');

  function applySearch() {
    if (!searchInput) return;
    const query = searchInput.value.trim().toLowerCase();

    // Toggle clear button
    if (clearSearchBtn) {
      clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
    }

    // Find the currently active panel
    const activePanel = document.querySelector('.tab-panel.active');
    if (!activePanel) return;

    const cards = activePanel.querySelectorAll('.card');
    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
      const desc = card.querySelector('p')?.innerText.toLowerCase() || '';
      const tags = card.dataset.tags?.toLowerCase() || '';
      const num = card.querySelector('.num')?.innerText.toLowerCase() || '';

      const match = !query || 
        title.includes(query) || 
        desc.includes(query) || 
        tags.includes(query) || 
        num.includes(query);

      card.style.display = match ? 'flex' : 'none';
      if (match) visibleCount++;
    });

    if (itemCount) {
      if (query.length === 0) {
        itemCount.innerText = `Showing all ${visibleCount} items in this section`;
      } else {
        itemCount.innerText = `Found ${visibleCount} item${visibleCount === 1 ? '' : 's'} matching "${query}"`;
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', applySearch);
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      applySearch();
      searchInput.focus();
    });
  }

  // 4. Update Tab Badges Dynamically
  tabs.forEach(tab => {
    const tabId = tab.dataset.tab;
    const panel = document.getElementById(tabId);
    if (panel) {
      const count = panel.querySelectorAll('.card').length;
      const badge = document.getElementById(`count-${tabId}`);
      if (badge) badge.innerText = count;
    }
  });

  // 5. Guide Modal (How to upload files)
  const guideModal = document.getElementById('guideModal');
  const openUploadGuide = document.getElementById('openUploadGuide');
  const guideBtn = document.getElementById('guideBtn');
  const closeGuide = document.getElementById('closeGuide');
  const gotItBtn = document.getElementById('gotItBtn');

  function openModal(e) {
    if (e) e.preventDefault();
    if (guideModal) guideModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (guideModal) guideModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (openUploadGuide) openUploadGuide.addEventListener('click', openModal);
  if (guideBtn) guideBtn.addEventListener('click', openModal);
  if (closeGuide) closeGuide.addEventListener('click', closeModal);
  if (gotItBtn) gotItBtn.addEventListener('click', closeModal);

  if (guideModal) {
    guideModal.addEventListener('click', (e) => {
      if (e.target === guideModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && guideModal && guideModal.classList.contains('show')) {
      closeModal();
    }
  });

  // 6. Floating Back to Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  // 7. Dynamic Footer Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.innerText = new Date().getFullYear();
  }
});
