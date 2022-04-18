

public with sharing class CarSearchFormController {
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getCarTypes(){
        try {
            return [select Id,Name from Car_Type__c];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}
