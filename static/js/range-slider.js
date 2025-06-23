// Range Slider Enhancement Script
// This script adds visual feedback to range inputs by updating CSS custom properties

(function () {
  'use strict';

  // Function to initialize range sliders
  function initializeRangeSliders() {
    const ranges = document.querySelectorAll('input[type=range]');

    if (ranges.length === 0) {
      return; // No range inputs found
    }

    ranges.forEach(function (range) {
      // Set initial value
      updateRangeValue(range);

      // Add event listener for input changes
      range.addEventListener('input', function () {
        updateRangeValue(range);
      });

      // Add event listener for change events (for better compatibility)
      range.addEventListener('change', function () {
        updateRangeValue(range);
      });
    });
  }

  // Function to update the CSS custom property for a range input
  function updateRangeValue(range) {
    try {
      const min = parseFloat(range.min) || 0;
      const max = parseFloat(range.max) || 100;
      const value = parseFloat(range.value) || min;

      // Calculate percentage
      const percentage = ((value - min) / (max - min)) * 100;

      // Set CSS custom property
      range.style.setProperty('--value', percentage + '%');
    } catch (error) {
      // Silently handle errors to avoid console pollution
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    // DOM is still loading, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', initializeRangeSliders);
  } else {
    // DOM is already loaded, initialize immediately
    initializeRangeSliders();
  }

  // Also initialize on window load to catch any dynamically added elements
  window.addEventListener('load', function () {
    // Small delay to ensure any dynamic content is loaded
    setTimeout(initializeRangeSliders, 100);
  });
})();
