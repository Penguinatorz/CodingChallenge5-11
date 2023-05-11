({
    showToastHelper: function (component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been Inserted successfully."
        });
        toastEvent.fire();
    },
    handleSuccessHelper: function (component, event, helper) {
        $A.get('e.force:refreshView').fire();
    },
    showErrorToastHelper: function (component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Error!",
            "message": "No values have been inputted."
        });
        toastEvent.fire();
    }
})
