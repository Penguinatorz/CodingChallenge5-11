({
  doInit: function (component, event, helper) {
    component.find("recordData").getNewRecord("Account", null, false, $A.getCallback(function () { }));
  },

  save: function (component, event, helper) {
    var recordComp = component.find("recordData").saveRecord(function (saveResult) { 
      if(saveResult.state === "success" || saveResult.state === "draft"){
        helper.showToastHelper(component, event, helper); 
        helper.handleSuccessHelper(component, event, helper);
      }else{
        helper.showErrorToastHelper(component, event, helper); 
      }
    });
  },
  myAction: function (component, event, helper) {
    component.set("v.columns", [
      { label: "Account Name", fieldName: "Name", type: "text" },
      { label: "Phone", fieldName: "Phone", type: "phone" }
    ]);

    var action = component.get("c.getAccounts");
    action.setCallback(this, function (data) {
      component.set("v.accList", data.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})