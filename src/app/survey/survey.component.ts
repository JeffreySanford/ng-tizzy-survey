import { Component, OnInit } from '@angular/core';
import * as Survey from '../../../node_modules/survey-angular';

var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
  { name:"page1", questions: [
      { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Is Tizzy the sexist chatter in the Paltalk Education Section?" },
      { type: "checkbox", choices: ["Smiley","UKChatmates","Meena"], hasOther: true, isRequired: true, name: "framework", title: "Who is the funniest chatter in the Paltalk Education Section?", visibleIf: "{frameworkUsing} = 'Yes'" }
   ]},
  { name: "page2", questions: [
    { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
    { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
  { name: "page3",questions: [
    { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
 ]
};

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var survey = new Survey.SurveyModel(surveyJSON);
    // survey.onComplete.add(sendDataToServer);
    Survey.SurveyNG.render("surveyElement", {model:survey});
  }

}
