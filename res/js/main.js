/**
 * Determines if a selected element is within the view box of the browser
 * @param {object} el
 * @returns {boolean}
 */
function elementIsInView(el) {
  if (el) {
    const bounding = el.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return false;
}

/**
 * Reframes the collage on document scroll
 * @param {event} e
 */
function handleScroll(e) {
  const el = document.querySelector('#collage');
  const slides = document.querySelector('#slides');
  const inView = elementIsInView(el);

  if (inView) {
    // If it is in view, determine it's native top and how
    // far is it from the top of the scroll
    const elBaseTop = el.offsetTop;
    const elRect = el.getBoundingClientRect();
    const elTop = elRect.top;
    const pct = 1 - elTop / elBaseTop;
    const maxOffset = slides.scrollWidth - el.clientWidth;

    /*
    Determine collage total width
    */
    document.getElementById('slides').style.left = `${parseInt(
      maxOffset * pct
    ) * -1}px`;
  }
}

window.addEventListener('scroll', handleScroll);
