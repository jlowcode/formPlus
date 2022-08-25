/**

 * Form Formplus

 *

 * @copyright: Copyright (C) 2005-2016  Media A-Team, Inc. - All rights reserved.

 * @license:   GNU/GPL http://www.gnu.org/copyleft/gpl.html

 */

 define(['jquery', 'fab/fabrik'], function (jQuery, Fabrik) {

	'use strict';

	var FormPlus = new Class({

		Implements: [Events],

		options: {
			formid               : 0,
			table                : 0,			
            elements             : '',
		},

		initialize: function (options) {						

			

			// const submit = jQuery('#fabrikSubmit_' + options.formid + '');
			// let elements = captureElements(options.elements);
			// const labels = jQuery('label');
			// console.log(options.formid);

			// console.log(elements);
			// render(0, elements, labels, submit);						
		},
	});
	
	// function render(index, elements, labels, submit){		
	// 	var button = document.createElement('button');
	// 	button.innerHTML = 'Próximo';		
	// 	button.onclick = () => { next(index, elements, labels, submit) }
		
	// 	jQuery('#conteudo').html(labels[index]);
	// 	jQuery('#conteudo').append(elements[index]);
		
	// 	console.log(index, elements.length);
		
	// 	if(index === (elements.length -1)) {			
	// 		jQuery('#conteudo').append(submit);
	// 	} else {
	// 		jQuery('#conteudo').append(button);
	// 	}
	// }

	// const next = (index, elements, labels, submit) => {
	// 	jQuery('#conteudo').html('');
	// 	render(index + 1, elements, labels, submit);
	// }

	// const captureElements = (elements) => {
	// 	let listElements = [];

    //     elements.map((el) => {
    //         listElements.push(document.querySelector('#' + el));
    //     });

    //     return listElements;
    // }

	return FormPlus;
});