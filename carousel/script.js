!(function(d){
	var itemClassName = "carousel-photo";
	items = d.getElementsByClassName(itemClassName),
	totalItems = items.length,
	slide = 0,
	moving = true;

	// Set Classes
	function setInitialClasses() {
		// Target prev current and next items
		// It assumes that we have at least three items
		items[totalItems - 1].classList.add("prev")
		items[0].classList.add("active")
		items[1].classList.add("next")
	}
		// Set event listeners
		function setEventListeners() {
			var next = d.getElementsByClassName('carousel-button-next')[0],
				prev = d.getElementsByClassName('carousel-button-prev')[0];

		next.addEventListener('click', moveNext)
		prev.addEventListener('click', movePrev)
		}

		// Navigation Handler
		function moveNext() {
			if (!moving) {
				if (slide === (totalItems - 1)) {
					slide = 0;
				} else {
					slide++;
				}
				// Move carousel to updated slide
				moveCarouselTo(slide)
			}
		}
		function movePrev() {
			if (!moving) {
				if (slide === 0) {
					slide = (totalItems - 1);
				} else {
					slide--;
				}
				moveCarouselTo(slide)
			}
		}
		function disableInteraction() {
			// Set moving to true for the same duration as our transition
			// (o.5s == 500ms)
			moving = true;
			setTimeout(() => {moving = false}, 500);
		}
	function moveCarouselTo(slide) {
		if (!moving) {
			disableInteraction()

			// Update old adjacent slides to new one
			var newPrevious = slide - 1,
				newNext = slide + 1,
				oldPrevious = slide - 2;
			oldNext = slide + 2;

			// Test if Carousel has more than 3 items
			if ((totalItems -1) > 3){
				if (newPrevious <= 0) {
					oldPrevious = ( totalItems - 1 );
				} else if ( newNext >= (totalItems - 1) ) {
					oldNext = 0;
				}
				if (slide === 0) {
					newPrevious = (totalItems - 1);
					oldPrevious = (totalItems - 2);
					oldNext = (slide + 1);
				} else if (slide === (totalItems - 1)) {
					newPrevious = (slide - 1)
					newNext = 0
					oldNext = 1
				}

				//Restore old classes
				items[oldPrevious].className = itemClassName;
				items[oldNext].className = itemClassName;

				// Add New classes
				items[newPrevious].className = itemClassName + " prev"
				items[newNext].className = itemClassName + " next"

				items[slide].className = itemClassName + " active"
			}
	}	}
		function initCarousel() {
			setInitialClasses();
			setEventListeners();

			moving = false;
		}
		initCarousel();
	
	
}(document))
