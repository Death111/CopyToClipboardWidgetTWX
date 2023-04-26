TW.Runtime.Widgets.CopyToClipboardWidgetTwx = function () {

	this.renderHtml = function () {
		return '<div class="widget-content widget-copytoclipboardwidgettwx" style="display:none;"></div>';
	};

	this.afterRender = function () {
		// if we never show at runtime, we should hide ourselves completely - Safari and Firefox will show scrollbars if the container is too narrow / short
		this.jqElement.hide();
		this.jqElement.closest('.widget-bounding-box').hide();
	};

	//{
	//    DataShape: metadata for the rows returned  
	//    ActualDataRows: actual Data Rows  
	//    SourceProperty: SourceProperty  
	//    TargetProperty: TargetProperty   
	//    RawSinglePropertyValue: value of SourceProperty in the first row of ActualDataRows  
	//    SinglePropertyValue: value of SourceProperty in the first row of ActualDataRows converted to the defined baseType of the target property [not implemented yet],  
	//    SelectedRowIndices: an array of selected row indices  
	//    IsBoundToSelectedRows: a Boolean letting you know if this is bound to SelectedRows
	//}
	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		//console.log("Update property called", updatePropertyInfo);
		// TargetProperty tells you which of your bound properties changed
		if (updatePropertyInfo.TargetProperty === 'Data') {
			this.setProperty('Data', updatePropertyInfo.SinglePropertyValue);
		} else {
			TW.log.error('copytoclipboardwidgettwx widget, unexpected property update received "' + updatePropertyInfo.TargetProperty + '"');
		}
	};

	this.serviceInvoked = function (serviceName) {
		switch (serviceName) {
			case 'CopyToClipboard':
				let data = this.getProperty('Data');
				navigator.clipboard.writeText(data);
				break;
			default:
				TW.log.error('copytoclipboardwidgettwx widget, unexpected serviceName invoked "' + serviceName + '"');
		}
	};
};