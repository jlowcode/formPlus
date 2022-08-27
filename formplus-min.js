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
			// carregar css cadastrado no backend			
			if(options.css.formplus_css) {
				document.getElementsByTagName('style')[0].innerHTML += options.css.formplus_css;
			}

			// O formulário foi escondido no PHP, pegamos essa referência antes das alterações
			// dos elementos para mostrar o formulário novamente depois de pronto
			const form = document.querySelector('.fabrikForm');
			
			// Pega a referência de todos os elementos que serão modificados
			const labels = document.querySelectorAll('label');
			const allElements = Array.from(document.querySelectorAll('.fabrikElementContainer'));
			const divControls = Array.from(document.querySelectorAll('.controls'));
			const fabrikElements = Array.from(document.querySelectorAll('.fabrikElement'));
			const inputs = document.querySelectorAll('input');
			const selects = document.querySelectorAll('select');
			const inputAppend = document.querySelectorAll('.input-append');
			const submit = document.querySelectorAll('button[type="submit"]');
			
			// Estilizar o botão submit
			submit[0].style.cssText += 'padding: 10px; ';

			// Css para posicionar o botão submit do lado direito do formulário
			document.querySelector('.fabrikActions').children[0].children[0].style.cssText = 'width: 88%; text-align: right;'

			//ISSO TEM QUE VOLTAR
			submit[0].style.display = 'none'; //Ocultando botão de submit

			let formStepsNum = 0;
			let requiredElements = [];  // Id's dos elementos com preenchimento obrigatório

			// Altera o css das Labels
			labels.forEach(item => {				
				if(item.getAttribute("opts")) requiredElements.push(item.getAttribute("for")); // Captura os id's dos elementos obrigatórios
				item.style.cssText += 'width: 75%; text-align: left; font-size: 1.6rem; ';
				item.style.cssText += 'margin: auto; float: none; !important; display: block !important; ';
			});
			
			// Filtrar apenas elementos do formulário
			const formElements = allElements.filter((item) => item.style.display !== 'none' );
			const divControlsFiltered = divControls.filter((item) =>  item.parentElement.style.display !== 'none' );
			const fabrikElementsFiltered = fabrikElements.filter((item) => item.parentElement.parentElement.style.display !== 'none' );

			// Faz a troca de página: se o próximo elemento estiver escondido, esconde o atual e exibe o próximo
			function updateFormSteps(e) {
				formElements.forEach(step => {					
					if(!step.style.cssText.contains('display: none'))
						step.style.cssText += 'display: none; ';						
				});				
				formElements[formStepsNum].style.cssText = 'min-height: 54.8vh; max-height: 54.8vh; display: block; ';
				formStepsNum === (formElements.length - 1) ? submit[0].style.display = '' : submit[0].style.display = 'none';
			}
			
			// Criar botão de próximo
			function createNextButton(item) {				
				var button = document.createElement("input");
				button.type = "button";
				button.value = "Próximo";
				button.style = 'margin: 5px 10px 0 0; padding: 10px; ';
				button.className = 'btn btn-primary button';
				button.addEventListener ("click", function() {
					let isValid = true;				

					// Verifica se o elemento atual faz parte dos elementos de preenchimento obrigatório
					requiredElements.forEach(idRequiredElement => {
						if(item.querySelector('input[name=' + idRequiredElement + ']'))
							isValid = checkIsRequired(item.querySelector('input[name=' + idRequiredElement + ']'));
					});

					// Só passa para a próxima página se o elemento não for obrigatório ou esteja preenchido
					if(isValid) {
						formStepsNum++;
						updateFormSteps();
						item.querySelector('.fabrikErrorMessage').innerHTML = '';
					} else {						
						item.querySelector('.fabrikErrorMessage').innerHTML = 'Campo Obrigatório';						
					}
				});
				return button;
			}

			// Verifica se o elemento foi preenchido caso não, retorna false e exibe mensagem de erro
			function checkIsRequired(element) {
				if(element) {
					if(element.value === '')
						return false;
				}
				return true;
			}

			// Criar botão de voltar
			function createPrevButton() {
				var button = document.createElement("input");
				button.type = "button";
				button.value = "Voltar";
				button.style = 'margin: 5px 10px 0 0; padding: 10px; ';
				button.className = 'btn button';
				button.addEventListener ("click", function() { 
					formStepsNum--;
					updateFormSteps();	
				});
				return button;
			}

			// Altera css dos elementos do formulário
			formElements.forEach((item, index) => {				
				let styleCss = 'min-height: 54.8vh; max-height: 54.8vh; ';
				styleCss += index === 0 ? ' display: auto; ' : ' display: none;'
				item.style.cssText += styleCss;		
			})
			
			// manter div de databaseJoin com a mesma altura das demais
			fabrikElementsFiltered.forEach((item, index) => {				
				if(item.getElementsByTagName('select').length > 0) {
					let styleCss = 'max-height: 40px; ';
					item.style.cssText += styleCss;
				}
			})

			// Altera css das div que contém o input
			divControlsFiltered.forEach((item, index) => {				
				var div = document.createElement("div");
				div.style.cssText = 'margin-top: 30px; ';
				
				item.style.cssText += 'margin: 0px auto; width: 75%;';			
				if(index !== 0) div.appendChild(createPrevButton());; // página do primeiro elemento
				if(index !== (divControlsFiltered.length - 1)) { // página do ultimo elemento
					div.appendChild(createNextButton(item));
				}

				item.append(div);
			});
			
			// Altera o css de cada imput
			inputs.forEach(item => {				
				item.style.cssText += 'height: 2.6rem; font-size: 1.2rem;';
			});
			
			// Altera o css de cada select
			selects.forEach(item => {				
				item.style.cssText += 'height: 2.6rem; font-size: 1.2rem;';
			});

			// Altera o css dos inputs de data
			inputAppend.forEach(item => {				
				item.style.cssText += 'width: 75%; text-align: center; ';
			});

			// Depois que todas as alterações foram feitas no formulário
			// apresentamos ele novamente setando o display como block
			form.style.cssText += 'display: block; ';
		},
	});

	return FormPlus;
});
