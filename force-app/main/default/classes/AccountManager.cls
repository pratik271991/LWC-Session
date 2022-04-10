public with sharing class AccountManager {
    //@AuraEnabled(cacheable=true)
    @AuraEnabled
    public static List<Account> getAccount(Integer numberOfRecords) {
        return [SELECT id,Name,Phone FROM Account Limit :numberOfRecords]; 
    }
}
