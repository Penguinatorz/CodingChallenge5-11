global class BatchableOpportunityClose implements Database.Batchable<SObject>,Schedulable  {
  public Database.QueryLocator start(Database.BatchableContext bc) {
    return Database.getQueryLocator(
      [
        SELECT Id, StageName, CloseDate
        FROM OPPORTUNITY
        WHERE stageName != 'Closed Won' AND stageName != 'Closed Lost'
      ]
    );
  }
  global void execute(Database.BatchableContext bc, List<SObject> objectList) {
    List<Opportunity> oppList = new List<Opportunity>();
    Opportunity opp = new Opportunity();

    for (SObject objectRecord : objectList) {
      opp = (Opportunity) objectRecord;
      if (opp.CloseDate < Datetime.now().addMonths(-6)) {
        oppList.add(opp);
      }
    }
    delete oppList;
  }
  global void finish(Database.BatchableContext bc){
  }

  global void execute(SchedulableContext sc)
  {
    BatchableOpportunityClose oppBatch = new BatchableOpportunityClose();
    Database.executeBatch(oppBatch);
  }
}
