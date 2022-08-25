<?php

/**

 * Formplus

 *

 * @package     Joomla.Plugin

 * @subpackage  Fabrik.form.formplus

 * @copyright   Copyright (C) 2005-2016  Media A-Team, Inc. - All rights reserved.

 * @license     GNU/GPL http://www.gnu.org/copyleft/gpl.html

 */



// No direct access

defined('_JEXEC') or die('Restricted access');



/**

 * other records in the table to auto fill in the rest of the form with that records data

 *

 * Does not alter the record you search for but creates a new record

 *

 * @package     Joomla

 * @subpackage  Fabrik

 * @author      Rafael Dias Soares

 * @copyright   Copyright (C) 2005-2016  Media A-Team, Inc. - All rights reserved.

 * @license     GNU/GPL http://www.gnu.org/copyleft/gpl.html

 */



// Require the abstract plugin class

require_once COM_FABRIK_FRONTEND . '/models/plugin-form.php';

/**

 * Allows you to observe an element, and when it its blurred asks if you want to lookup related data to fill

 * into additional fields

 *

 * @package     Joomla.Plugin

 * @subpackage  Fabrik.form.formplus

 * @since       3.0

 */

class PlgFabrik_FormFormplus extends PlgFabrik_Form{

	public function onLoad(){
		$params = $this->getParams();
		$formModel     = $this->getModel();
		$groupView     = $formModel->groupView;
		return true;
	}

	public function onAfterJSLoad() {
		$params        = $this->getParams();
		$formModel     = $this->getModel();		
		
		$opts          = new stdClass;		
		$opts->formid  = $formModel->getId();
		$opts->table   = $params->get('formplus_table', '');		
		$this->model->form->label = "";
		$opts = json_encode($opts);	

		// JText::script('PLG_FORM_FORMPLUS_DO_UPDATE');

		// JText::script('PLG_FORM_FORMPLUS_SEARCHING');

		// JText::script('PLG_FORM_FORMPLUS_NORECORDS_FOUND');

		$this->formJavascriptClass($params, $formModel);
		
		$formModel->formPluginJS['Formplus' . $this->renderOrder] = ' var formplus = new Formplus(' . $opts . ');';
	}
}