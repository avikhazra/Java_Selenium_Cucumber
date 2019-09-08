$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:SampleFeature.feature");
formatter.feature({
  "name": "I go to the home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I go to the home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I go to the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.home_page()"
});
formatter.result({
  "status": "passed"
});
});