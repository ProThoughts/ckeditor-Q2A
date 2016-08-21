/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
	{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
	{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
	{ name: 'links' },
	{ name: 'insert' },
	{ name: 'forms' },
	{ name: 'tools' },
	{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
	{ name: 'others' },
	{ name: 'pbckcode' },
	'/',
	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
	{ name: 'styles' },
	{ name: 'colors' },
	{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Anchor,Strike,Underline';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';
	config.entities = false;
	// CKEDITOR PLUGINS LOADING
//	config.extraPlugins +=',pbckcode'; // add other plugins here (comma separated)

	// ADVANCED CONTENT FILTER (ACF)
	// ACF protects your CKEditor instance of adding unofficial tags
	// however it strips out the pre tag of pbckcode plugin
	// add this rule to enable it, useful when you want to re edit a post
	config.extraAllowedContent = 'pre[*]{*}(*)'; // add other rules here
//	config.allowedContent = 'pre[*]{*}(*)'; // add other rules here


	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.pbckcode = {
		// An optional class to your pre tag.
cls : '',

      // The syntax highlighter you will use in the output view
      highlighter : 'PRETTIFY',

      // An array of the available modes for you plugin.
      // The key corresponds to the string shown in the select tag.
      // The value correspond to the loaded file for ACE Editor.
      modes :  [ ['C/C++', 'c_cpp'], ['Java', 'java'], ['SQL', 'sql'], ['HTML', 'html'], ['Text', 'text']],

      // The theme of the ACE Editor of the plugin.
      theme : 'textmate',

      // Tab indentation (in spaces)
      tab_size : '4'
	};

};
