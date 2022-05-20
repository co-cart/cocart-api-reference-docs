//= require ../lib/_jquery
;(function () {
	'use strict';

	$(document).ready(function(){
		$('body').find('.close-warning').on('click', function( e ) {
			e.preventDefault();

			$(this).parent().fadeOut('fast').remove();
			$('body').removeClass('warning');
		});

		// Select API version currently viewing.
		$("#api-versions > option").each(function() {
			if (this.value == window.location.pathname) {
				this.selected = 'selected';
			}
		});

		// Add code label to all JSON example responses.
		$('pre.highlight.tab-json').prepend('<div class="code-label">Example JSON API Response</div>');
	})

})();
