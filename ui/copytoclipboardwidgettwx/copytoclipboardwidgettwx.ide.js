TW.IDE.Widgets.CopyToClipboardWidgetTwx = function () {

	this.widgetIconUrl = function () {
		return '../Common/extensions/CopyToClipboardWidgetTwx/ui/copytoclipboardwidgettwx/default_widget_icon.ide.png';
	};

	this.widgetProperties = function () {
		return {
			'name': 'Clipboard',
			'description': '',
			'category': ['Common'],
			'properties': {
				'Data': {
					'description': 'Infotable to inspect',
					'isBindingTarget': true,
					'isEditable': false,
					'baseType': 'STRING',
					'warnIfNotBoundAsTarget': true
				}
			}
		}
	};

	this.widgetServices = function () {
		return {
			'CopyToClipboard': { 'warnIfNotBound': true }
		};
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case "DisplayName":
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.validate = function () {
		var result = [];

		if (!this.isPropertyBoundAsTarget('Data')) {
			var bound = false;

			if (!bound)
				result.push({ severity: 'warning', message: "data has to be bound" });
		}
		return result;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return '<div class="widget-content widget-copytoclipboardwidgettwx">' +
			'<span class="copytoclipboardwidgettwx-property">' + this.properties.DisplayName + " - invisible @ runtime" + '</span>' +
			'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()
		// get a reference to the value element
		valueElem = this.jqElement.find('.copytoclipboardwidgettwx-property');
	};

};