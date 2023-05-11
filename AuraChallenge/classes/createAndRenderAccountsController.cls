public with sharing class createAndRenderAccountsController {


    @AuraEnabled
	public static List<Account> getAccounts() {
    List<Account> accList = [SELECT Id, Name, Phone, BillingState, BillingCountry FROM Account];
   	return accList;
	}
}