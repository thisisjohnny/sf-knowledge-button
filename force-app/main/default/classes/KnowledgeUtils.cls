public with sharing class KnowledgeUtils {
    @AuraEnabled(cacheable=true)
    public static Knowledge__kav getKnowledgeArticle( String articleName ) {
        Knowledge__kav article = [SELECT Id, Title, FAQ_Answer__c FROM Knowledge__kav WHERE Title = :articleName LIMIT 1];
        
        return article;
    }
}
