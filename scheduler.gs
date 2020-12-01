function schedulerDialog(){
   var html = HtmlService.createHtmlOutputFromFile('Scheduler')
      .setWidth(417)
      .setHeight(170);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Select Time');
}

function submitScheduler(values){
   Logger.log(values);
   PropertiesService.getScriptProperties().setProperty('Schedular Year', values.year);
   PropertiesService.getScriptProperties().setProperty('Schedular Month', values.month);
   PropertiesService.getScriptProperties().setProperty('Schedular Day', values.day);
   PropertiesService.getScriptProperties().setProperty('Schedular Hour', values.hour);
   PropertiesService.getScriptProperties().setProperty('Schedular Minute', values.minute);
   return values;
}
